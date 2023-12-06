const express = require('express');
const router = express.Router();

const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', workoutsCtrl.index);

module.exports = router;