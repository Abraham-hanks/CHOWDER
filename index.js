const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

// app setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// middleware
const validateRegister = (req, res, next) => {
  const errorMessages = [];
  const { fullName, address, email, phoneNumber, password, userType } = req.body;
  if (!fullName) {
    errorMessages.push('Full name is required');
  }

  if (!address) {
    errorMessages.push('Address is required');
  }

  if (!email) {
    errorMessages.push('Email is required');
  }

  if (!phoneNumber) {
    errorMessages.push('Phone number is required');
  }

  if (!password) {
    errorMessages.push('Password is required');
  }

  if (!userType) {
    errorMessages.push('User Type is required');
  }

  // check if validations passed
  if (errorMessages.length > 0) {
    // validation failed, render signup with validation errors
    res.render('signup', { errors: errorMessages, data: req.body })
  }
  else {
    // proceed to next handler
    next()
  }
}

// view routes
app.get('/', (req, res) => {
  res.status(200).render('home');
})

app.get('/login', (req, res) => {
  res.status(200).render('login');
})

app.get('/signup', (req, res) => {
  res.status(200).render('signup', { errors: null, data: {} });
})

app.get('*', (req, res) => {
  res.status(404).send('PAGE NOT FOUND');
})

// service routes
app.post('/signup', validateRegister, (req, res) => {
  const body = req.body;
  res.send('Signup Successful!')
})

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
