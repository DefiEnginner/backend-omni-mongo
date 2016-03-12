var mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');


const TagSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    locked: {
        type: Boolean,
        default: false
    },
    knowledge_experts: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        autopopulate: { maxDepth: 2 }

    }],
    approvers: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        autopopulate: { maxDepth: 2 }

    }],

}, {
    timestamps: true
});

TagSchema.plugin(autopopulate);

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;