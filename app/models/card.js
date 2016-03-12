var mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');


/*
STATUS:
1 - Up-to-date
2 - Out-of-date
3 - Needs to be verified
4 - Needs approval 
5 - Not documented

UPDATE_INTERVAL 
1 - Every 2 weeks
2 - Every month
3 - Every 3 months
4 - Every 6 months
5 - Every year
*/
const CardSchema = mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Company',
        autopopulate: { maxDepth: 2 }

    },
    question: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    answer: {
        type: String,
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Tag',
        autopopulate: { maxDepth: 2 }

    }],
    status: Number, 
    last_accessed: Date,
    upvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        autopopulate: { maxDepth: 2 }

    }],
    screenshot_urls: [{
    	type: String
    }],
    screenrecording_urls: [{
    	type: String
    }],
    update_interval: Number, 
    autoupdate: Boolean, 
    owners: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        autopopulate: { maxDepth: 2 }

    }],
    user_permissions: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        autopopulate: { maxDepth: 2 }

    }],
    team_permissions: [{
    	type: String
    }],
    number_of_accesses: Number,
    archived: Boolean

}, {
    timestamps: true
});

CardSchema.plugin(autopopulate);

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;