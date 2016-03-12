var mongoose = require('mongoose');

/**
 * Currently using UploadCare; pulls these traits from the upload obj
 */
const ImageSchema = mongoose.Schema({
    team: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Nflteam',
    },
    uuid: {
        type: String,
        index: true
    },
    url: {
        type: String,
        required: true,
        index: true
    },
}, {
    timestamps: true
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;