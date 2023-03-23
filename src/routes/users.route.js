const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

// define the home page route
router.get('/', (req, res) => {
  res.send('Users home page')
})

// define the about route
router.get('/:id', (req, res) => {
  res.send('Single User')
})

router.get('/active', (req, res) => {
  res.send('Active Users')
})

router.get('/inactive', (req, res) => {
  res.send('Inactive Users')
})

router.post('/', (req, res) => {
  res.send('Create User')
})

router.put('/', (req, res) => {
  res.send('Update User')
})

module.exports = router