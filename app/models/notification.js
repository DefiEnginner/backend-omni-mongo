var mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');


/*
STATUS:
1 - Up-to-date
2 - Out-of-date
3 - Needs to be verified
4 - Needs approval 
5 - Not documented
*/
const NotificationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        autopopulate: { maxDepth: 2 }

    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Card',
        autopopulate: { maxDepth: 2 }

    },
    question: {
        type: String,
        required: true,
    },
    preview: {
        type: String
    },
    status: Number,
    resolved: {
    	type: Boolean,
    	default: false
    }

}, {
    timestamps: true
});

NotificationSchema.plugin(autopopulate);

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;