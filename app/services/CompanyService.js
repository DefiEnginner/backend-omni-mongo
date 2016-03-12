const Company = require('../models').Company;
const _ = require('underscore');
const Constants = require('./../constants/defs');

exports.getCompanyByName = async function (name) {
    let err, company;
    [err, company] = await to(Company.find({name}));
    if (err) TE("Unable to find company: " + err.message);

    return dish;
}

exports.create = async function (companyJson) {
    let err, oldCompany, company;

    // see if exists already
    [err, oldCompany] = await to(Company.findOne({name: companyJson.name}));
    if(oldCompany) TE('Company already exists.');

    [err, company] = await to(Company.create(companyJson));
    if (err) TE("Unable to create company: " + err.message);

    return company;
}

/*
exports.deleteDish = async function(dishId) {
    let err, _;
    console.log('DeleteDish', dishId);
    [err, _] = await to(Dish.findByIdAndDelete(dishId));
    if (err) TE("Unable to delete dish: " + err.message);
}

exports.update = async function(dishId, update) {
    let err, dish;
    console.log(update);
    // TODO: check that this works
    [err, dish] = await to(Dish.findByIdAndUpdate(dishId, update, {new: true}));
    if (err) {
        TE("Unable to update dish: " + err.message);
    }

    return dish;
}
*/