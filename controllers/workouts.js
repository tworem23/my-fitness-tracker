const Workout = require('../models/workout')

module.exports = {
    index
}

async function index(re, res) {
    const workouts = await Workout.find({})
    res.render('workouts/index', { title: 'Workouts', workouts })
}