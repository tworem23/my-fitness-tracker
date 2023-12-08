const Workout = require("../models/workout")


module.exports = {
    create,
    update,
    edit
}

async function create(req, res) {
    const workout = await Workout.findById(req.params.id);
    workout.exercises.push(req.body);
    try {
        await workout.save();
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/workouts/${workout._id}`)
}

async function edit(req, res) {
    const workout = await Workout.findOne({'exercises._id': req.params.id});
    const exercise = workout.exercises.id(req.params.id)
    res.render(`exercises/edit`, { title: 'Edit Exercise', exercise })
}

async function update(req, res) {
    const workout = await Workout.findOne({'exercises._id': req.params.id, user: req.user._id});
    if (!workout) return res.redirect('/workouts');
    const exerciseIdx = workout.exercises.findIndex(exercise => exercise._id.equals(req.params.id));
    workout.exercises[exerciseIdx] = req.body;
    try {
        await workout.save();
    } catch(err) {
        console.log(err)  
    }
    res.redirect(`/workouts/${workout._id}`)
}