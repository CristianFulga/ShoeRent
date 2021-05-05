const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const ctrlPlans = require('../controllers/plans');
const express = require('express');
const jwt = require('express-jwt');
const router = express.Router();

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload',
  algorithms: ['HS256']
});

//plans
router.get('/plans', ctrlPlans.plansRead);
router.get('/plans/:id', ctrlPlans.planRead);

//profile with authentication
router.get('/profile', auth, ctrlProfile.profileRead);
router.delete('/profile', auth, ctrlProfile.profileDelete);
router.put('/profile', auth, ctrlProfile.profileUpdate);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
// router.post('/update', ctrlAuth.update);

module.exports = router;

