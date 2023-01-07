const sharp = require('sharp')
const Item = require('./../models/item/itemModel')

exports.getAllItems = async (req, res) => {
  const page = Number(req.query?.page) || 1
  const limit = Number(req.query?.limit) || 50
  const skip = (page - 1) * limit

  const allItems = await Item.find({ user: req.user.id })
    .limit(limit)
    .skip(skip)
    .populate('category')
  console.log(allItems)
  res.json({ items: allItems })
}
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndRemove(req.params.item)
  res.status(204).json()
}

exports.createItem = async (req, res) => {
  const oneItem = await Item.create({ ...req.body, user: req.user.id })
  // if (req.file) {
  //   const img = await sharp(req.file.buffer)
  //     .resize(2000, 1700)
  //     .toFormat('jpeg')
  //     .toFile(`./uploads/${oneItem.id}.jpeg`)

  //   oneItem.image = `/uploads/${oneItem.id}.jpeg`
  //   await oneItem.save()
  // }
  await Item.populate(oneItem, { path: 'user category' })
  res.json({ data: { item: { ...oneItem, it: 'ololol' } } })
}
