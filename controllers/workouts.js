const Workout = require('../models/workout')


module.exports = {
    index,
    show,
    create,
    new: newWorkout,
    delete: deleteWorkout
}

async function index(req, res) {
    const workout = await Workout.find({})
    res.render('workouts/index', { title: 'Workouts', workout })
}

async function show(req, res) {
    const workout = await Workout.findById(req.params.id)
    res.render('workouts/show', {
        title: `${workout.name}`,
        workout
    })

}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'Create Your Workout', errorMsg: '' })
}

async function create(req, res) {

    req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar; 

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const workout = await Workout.create(req.body);
        res.redirect(`/workouts/${workout._id}`)
    } catch (err) {
        console.log(err)
        res.render('workouts/new', { errorMsg: err.message })
    }
}

async function deleteWorkout(req, res) {
    await Workout.findByIdAndDelete(req.params.id)
    res.redirect('/workouts')
}