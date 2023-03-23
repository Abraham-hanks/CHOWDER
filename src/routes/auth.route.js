const express = require('express')
const router = express.Router()
const { validateRegister } = require('../middlewares/auth.middleware')
const { User } = require("../models/user.model")

// POST REQUESTS
router.post('/signup', validateRegister, async (req, res) => {
  const body = req.body;
  await User.create(body)

  res.status(200).json({
    status: true,
    message: 'Signup Successful',
    data: null
  })
})

// GET REQUESTS
router.get('/login', (req, res) => {
  res.status(200).render('login');
})

router.get('/signup', (req, res) => {
  res.status(200).render('signup', { errors: null, data: {} });
})

module.exports = router