const companyService = require('../services/companyService');


exports.create = async function(req, res) {
    if (!checkProps(req.body, "name|email_domain")) return ReE(res, 'Missing properties for endpoint', 400);
    const {name, email_domain} = req.body;

    let companyJson = {name, email_domain};
    let err, newCompany;

    [err, newCompany] = await to(companyService.create(companyJson));
    if (err) return ReE(res, 'Err creating company: ' + err.message , 500);

    return ReS(res, {
        companyJson
    }, 201);
}