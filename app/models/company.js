var mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

/**
 * Currently using UploadCare; pulls these traits from the upload obj
 */
const CompanySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Tag',
        autopopulate: { maxDepth: 2 }
    }],
    email_domain: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

CompanySchema.plugin(autopopulate);

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;