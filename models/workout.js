const mongoose = require('mongoose');
const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    sets: {type: Number},
    reps: {type: Number},
    weight: {type: Number},
    time: {type: Number}
}, {
    timestamps: true
})

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [exerciseSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);