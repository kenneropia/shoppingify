const express = require('express')
const multer = require('multer')
const { protectRoute } = require('../controllers/auth.controller')

const { createItem, deleteItem } = require('../controllers/item.controller')
const Item = require('../models/item/itemModel')

const router = express.Router()

router.use(protectRoute)

// router.use((req, res, next) => {
//   req.user = { id: '619a8a135f05d924825c7266' }
//   next()
// })

// const multerStorage = multer.memoryStorage()

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image')) {
//     cb(null, true)
//   } else {
//     cb(new ApiError('Not an image! Please upload only images', 400), false)
//   }
// }
// const upload = multer({ storage: multerStorage, fileFilter: multerFilter })
// upload.single('image')

router
  .route('/')
  .post(createItem)
  .delete(deleteItem)
  .get(async (req, res) => {
    const page = Number(req.query?.page) || 1
    const limit = Number(req.query?.limit) || 50
    const skip = (page - 1) * limit

    const allItems = await Item.find({ user: req.user.id })
      .limit(limit)
      .skip(skip)
      .populate('category')
    console.log(allItems)
    res.json({ items: allItems })
  })

module.exports = router
