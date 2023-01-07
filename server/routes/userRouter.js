const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user/userModel')
const protectRoute = require('./../utils/protectRoute')
const authController = require('./../controllers/auth.controller')

const router = express.Router()

router.post('/signup', authController.signup)

router.post('/login', authController.login)

router.get('/me', authController.protectRoute, async (req, res, next) => {
  res.json({ data: { user: req.user } })
})

module.exports = router
