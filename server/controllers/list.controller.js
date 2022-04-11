const List = require('../models/list/listModel')
const Item = require('../models/item/itemModel')
const Category = require('../models/category/categoryModel')
const Joi = require('joi')

exports.getAllLists = async (req, res) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 5
  const skip = (page - 1) * limit

  let allLists = await List.find({ user: req.user.id })
    .populate('list.item')
    .populate({
      path: 'list',
      populate: {
        path: 'item',
        populate: {
          path: 'category',
          model: 'Category',
        },
      },
    })
    .lean()

  // let allLists = await List.aggregate([
  //   { $match: { user: req.user.id } },
  //   { $unwind: '$lists.list' },
  //   {
  //     $lookup: {
  //       from: 'item',

  //       localField: 'list.item',
  //       foreignField: '_id',
  //       as: '$lists.list.item',
  //     },
  //   },
  // ])

  res.json({ data: { lists: allLists } })
}

exports.createAList = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(2),
    list: Joi.array().items(
      Joi.object({
        item: Joi.string().alphanum().min(24).max(24),
        amount: Joi.number().min(1),
      })
    ),
    user: Joi.string().alphanum().min(24).max(24),
  })
  console.log(req.body)
  Joi.assert(req.body, schema, { abortEarly: false })
  const data = { ...req.body, user: req.user.id }
  let newList = await List.create(data)
  const item = await Item.populate(newList.list, {
    path: 'item',
  })
  res.json({ data: { list: newList } })
}

exports.updateAList = async (req, res) => {
  const { listId } = req.params

  //   const schema = Joi.array().items(Joi.object({
  // id: Joi.string().alphanum().min(12),
  // name":
  // }))
  //  {}
  const list = await List.findById(listId)

  list.list = req.body.list

  let updatedList = await list.save()
  updatedList = await List.findById(updatedList._id).populate('list.item')

  res.json({ data: { list: updatedList } })
}
