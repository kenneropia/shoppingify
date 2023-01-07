const Category = require('../models/category/categoryModel')

exports.createCategory = async (req, res) => {
  const oneCategory = await Category.create({ ...req.body, user: req.user.id })
  res.json({ data: { category: oneCategory } })
}

exports.getCategories = async (req, res) => {
  const categories = await Category.find({ user: req.user.id })
  res.json({ categories })
}
