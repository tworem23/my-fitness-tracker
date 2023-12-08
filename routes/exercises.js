const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises')

router.post('/workouts/:id/exercises', exercisesCtrl.create);

router.get('/exercises/:name/edit', exercisesCtrl.edit);

// router.put('/exercises/:id', exercisesCtrl.update);

module.exports = router;