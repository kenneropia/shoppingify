const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = require('./app')
const List = require('./models/list/listModel')
const Category = require('./models/category/categoryModel')
const Item = require('./models/item/itemModel')

dotenv.config({ path: './.env' })

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...')
  console.log(err.name, err.message)
  process.exit(1)
})

const DB =
  process.env.NODE_ENV == 'development'
    ? process.env.MONGODB_URL
    : process.env.MONGODB_URL

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'))

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...')
  console.log(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})
