const express = require('express')
const Router = express.Router()


// Controller
const controller = require('../controllers/userController')

// Signup
Router.post('/api/auth/signup', controller.signup);

// Login
Router.post('/api/auth/login', controller.login);

// Logout
Router.post('/api/auth/logout', controller.logout)


module.exports = Router;