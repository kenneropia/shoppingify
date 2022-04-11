const express = require('express')
const { protectRoute } = require('../controllers/auth.controller')
const {
  createCategory,
  getCategories,
} = require('../controllers/category.controller')

const router = express.Router()
router.use(protectRoute)

router.get('/', getCategories)

router.post('/', createCategory)

module.exports = router
