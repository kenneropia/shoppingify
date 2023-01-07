const List = require('./../models/list/listModel')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = async (req, res) => {
  const items = await List.aggregate([
    { $unwind: '$list' },
    { $match: { user: ObjectId(req.user.id) } },
    { $project: { list: 1, user: 1 } },
    { $unwind: '$list.item' },
    { $group: { _id: '$list.item', count: { $sum: 1 } } },
    {
      $lookup: {
        from: 'items',
        localField: '_id',
        foreignField: '_id',
        as: 'item',
      },
    },

    { $sort: { count: -1 } },
    { $limit: 3 },
    { $unwind: '$item' },
    { $project: { _id: 1, count: 1, item: { _id: 1, name: 1 } } },
  ])
  const itemsAmount = (
    await List.aggregate([
      { $unwind: '$list' },
      { $match: { user: ObjectId(req.user.id) } },
      { $project: { list: 1, user: 1 } },
      { $unwind: '$list.item' },
      { $group: { _id: '$list.item', count: { $sum: 1 } } },
      {
        $lookup: {
          from: 'items',
          localField: '_id',
          foreignField: '_id',
          as: 'item',
        },
      },

      { $sort: { count: -1 } },
      { $limit: 3 },
      { $unwind: '$item' },
      { $project: { _id: 1, count: 1 } },
      { $group: { _id: null, totalAmount: { $sum: '$count' } } },
    ])
  )[0].totalAmount
  const categories = await List.aggregate([
    { $unwind: '$list' },
    { $match: { user: ObjectId(req.user.id) } },
    {
      $lookup: {
        from: 'items',
        localField: 'list.item',
        foreignField: '_id',
        as: 'item',
      },
    },
    { $project: { item: 1 } },
    { $group: { _id: '$item.category', count: { $sum: 1 } } },

    {
      $unwind: '$_id',
    },
    {
      $lookup: {
        from: 'categories',
        localField: '_id',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $unwind: '$category',
    },
    { $project: { count: 1, category: { name: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 3 },
  ])

  const categoriesAmount = (
    await List.aggregate([
      { $unwind: '$list' },
      { $match: { user: ObjectId(req.user.id) } },
      {
        $lookup: {
          from: 'items',
          localField: 'list.item',
          foreignField: '_id',
          as: 'item',
        },
      },
      { $project: { item: 1 } },
      { $group: { _id: '$item.category', count: { $sum: 1 } } },

      {
        $unwind: '$_id',
      },
      {
        $lookup: {
          from: 'categories',
          localField: '_id',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $unwind: '$category',
      },
      { $sort: { count: -1 } },
      { $limit: 3 },
      { $project: { count: 1, category: { name: 1 } } },
      {
        $group: {
          _id: null,
          count: { $sum: '$count' },
        },
      },
    ])
  )[0].count
  const currentYear = 2021
  console.log(currentYear)
  const itemsByMonths = await List.aggregate([
    { $match: { user: ObjectId(req.user.id) } },
    { $unwind: '$list' },
    {
      $lookup: {
        from: 'items',
        localField: 'list.item',
        foreignField: '_id',
        as: 'item',
      },
    },

    { $unwind: '$item' },
    {
      $project: {
        createdAt: 1,
        item: { name: 1, createdAt: 1 },
        year: { $eq: [{ $year: '$createdAt' }, currentYear] },
      },
    },
    { $match: { year: true } },
    {
      $group: {
        _id: { $month: '$item.createdAt' },
        numberofItem: { $sum: 1 },
      },
    },
    { $sort: { numberofItem: 1 } },
  ])

  res.json({
    data: {
      itemsByMonths,
      categories: { categories, categoriesAmount },
      items: { itemsAmount, items },
    },
  })
}
