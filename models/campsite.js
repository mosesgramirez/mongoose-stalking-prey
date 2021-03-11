const mongoose = require('mongoose');
const Schema = mongoose.Schema; // optional

const campsiteSchema = new Schema(
{
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true }
// optional second argument
);

// Note: Mongoose will translate the first argument to "campsites" (plural, LC).
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;

