/*index.js - Arsenii Buriak - 301266501 - 01/10/23 */

/* Creating a router */
var express = require('express')
var router = express.Router()


/* Rendering pages */
router.get('/', (req, res) => {
    res.render('home')
})
  
router.get('/about', (req, res) => {
    res.render('about')
})
  
router.get('/projects', (req, res) => {
    res.render('projects')
})
  
router.get('/services', (req, res) => {
    res.render('services')
})
  
router.get('/contact', (req, res) => {
    res.render('contact')
})
  
module.exports = router