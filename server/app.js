const path = require('path')
const express = require('express')
require('express-async-errors')
const app = express()
const userRouter = require('./routes/userRouter')
const itemsRouter = require('./routes/itemRouter')
const listRouter = require('./routes/listRouter')
const categoryRouter = require('./routes/categoryRouter')
const statsRouter = require('./controllers/stats.controller')
const globalErrorHandler = require('./utils/globalErrorHandler')
const { protectRoute } = require('./controllers/auth.controller')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'), {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['jpg', 'png'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    },
  })
)

app.use(
  '/',
  express.static(path.join(__dirname, 'static'), {
    dotfiles: 'ignore',
    etag: false,

    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    },
  })
)

app.get('/me', (req, res) => {
  res.send('lolo')
})

app.use('/api/user', userRouter)
app.use('/api/items', itemsRouter)
app.use('/api/lists', listRouter)
app.use('/api/categories', categoryRouter)

app.get('/api/stats', protectRoute, statsRouter)

app.all('*', (req, res, next) => {
  const error = Error(`Can't find ${req.originalUrl} on this server!`, 404)
  error.isOperational = true
  error.statusCode = 404
  throw error
})

app.use(globalErrorHandler)

module.exports = app
