const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/workouts/:id/exercises', ensureLoggedIn, exercisesCtrl.create);

router.get('/exercises/:id/edit', ensureLoggedIn, exercisesCtrl.edit);

router.put('/exercises/:id', ensureLoggedIn, exercisesCtrl.update);

module.exports = router;