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

const userRoutes = require('./src/routes/users.route')
const authRoutes = require('./src/routes/auth.route')
app.use('/user', userRoutes)
app.use('/auth', authRoutes)

// view routes
app.get('/', (req, res) => {
  res.status(200).render('home');
})

app.get('*', (req, res) => {
  res.status(404).send('PAGE NOT FOUND');
})

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
