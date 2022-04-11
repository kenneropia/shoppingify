const express = require('express')

const { protectRoute } = require('../controllers/auth.controller')
const {
  getAllLists,
  createAList,
  updateAList,
} = require('../controllers/list.controller')

const router = express.Router()

router.use(protectRoute)

router.get('/', getAllLists)
router.post('/', createAList)
router.patch('/:listId', updateAList)
module.exports = router
