const Workout = require("../models/workout")


module.exports = {
    create,
    // update,
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
    console.log('this is req.params', req.params)
    const workout = await Workout.findOne({'exercises.name': req.params.name});
    console.log(workout)
    const exercise = workout.exercises
    res.render(`exercises/edit`, { title: 'Edit Exercise', exercise })
}

// async function update(req, res) {
//     const exercise = await Workout.update(req.params.id, req.body);
//     try {
//         await workout.save();
//     } catch (err) {
//         console.log(err)
//     }
//     res.redirect(`/workouts/${workout._id}`)
// }