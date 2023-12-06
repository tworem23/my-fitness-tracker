const mongoose = require('mongoose');
const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    sets: {type: Number},
    reps: {type: Number},
    time: {type: Number}
}, {
    timestamps: true
})

module.exports = mongoose.model('Exercise', exerciseSchema);