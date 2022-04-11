const sharp = require('sharp')
const Item = require('./../models/item/itemModel')

// exports.getAllItems = async (req, res) => {
//   const items = await Item.find({}).populate('category')
//   res.json({ data: { items } })
// }

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
