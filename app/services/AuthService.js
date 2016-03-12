const User = require('./../models').User;
const Company = require('./../models').Company;
const validator = require('validator');
const Constants = require('./../constants/defs');
const emailService = require('./EmailService');


exports.createUser = async function (userInfo) {
    [err, oldUser] = await to(User.findOne({
        'email': userInfo.email
    }));

    [err, company] = await to(Company.findOne({
        'name': userInfo.company
    }));

    //attach company to user
    if (!company) TE('Company not registered yet - please contact team@addomni.com');
    if(company.email_domain != userInfo.email.split("@")[1]) TE('Please register with your company email');
    userInfo.company = company;

    //generate code for verification
    userInfo.code = Math.random().toString(36).substring(2,6);

    [err, newUser] = await to(User.create(userInfo));
    if (err) TE(err.message);

    if (CONFIG.app === "Production") {
        //verify user email flow 
        const toInformation = {
            email: userInfo.email
        };
        const args = { code: userInfo.code };
        const subject = 'Verification Code: ' + userInfo.code;
        const template = '/emailVerificationMobile.html';
        
        [err, _] = await to(emailService.sendEmail(template, args, toInformation, subject));
        if (err) return TE(err.message, true);
    }

    return newUser;
}

exports.authUser = async function (userInfo) { //returns token
    if (!userInfo.password) TE('Please enter a password to login');
    let user;

    if (validator.isEmail(userInfo.email)) {
        [err, user] = await to(User.findOne({
            'email': userInfo.email
        }));
        if (err) TE(err.message, true);
    } else {
        TE('A valid email was not entered');
    }

    if (!user) TE('Not registered');
    [err, user] = await to(user.comparePassword(userInfo.password));
    if (err) TE(err.message, true);
    return user;
}

exports.resetPassword = async function (reqBody) {
    if (!reqBody.resetPasswordToken) TE('Invalid token');
    if (!reqBody.newPassword) TE('Invalid password');
    
    let err, user;
    const conditions = {
        resetPasswordToken: reqBody.resetPasswordToken,
        resetPasswordExpires: {
            $gt: Date.now()
        },
    };

    [err, user] = await to(User.findOne(conditions));

    if (!user) TE('Invalid or expired token');

    /**
     * hashed password and creation of a new refresh token 
     * handled by 'save' hook in user model
     */

    user.password = reqBody.newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    [err, user] = await to(user.save());
    if (err) TE(err.message);

    return user;
}