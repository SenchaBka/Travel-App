var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/signin', (req, res) => {
    res.render('signin')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})
  
module.exports = router