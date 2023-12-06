const express = require('express');
const router = express.Router();

const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', workoutsCtrl.index);

router.get('/new', ensureLoggedIn, workoutsCtrl.new);

router.get('/:id', workoutsCtrl.show)

router.post('/', workoutsCtrl.create);

module.exports = router;