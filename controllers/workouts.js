const Workout = require('../models/workout')

module.exports = {
    index,
    show,
    create,
    new: newWorkout
}

async function index(req, res) {
    const workouts = await Workout.find({})
    res.render('workouts/index', { title: 'Workouts', workouts })
}

async function show(req, res) {
    const workout = await Workout.findById(req.params.id).populate('exercises')
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