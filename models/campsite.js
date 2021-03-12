const mongoose = require('mongoose');
const Schema = mongoose.Schema; // optional

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { 
    // optional second argument
    timestamps: true 
});

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
    },
    comments: [commentSchema]
}, { 
    timestamps: true 
});

// Note: Mongoose will translate the first argument to "campsites" (plural, LC).
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;

