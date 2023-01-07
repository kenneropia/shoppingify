const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      require: true,
    },
    note: {
      type: String,
      minlength: 2,
      require: true,
    },
    image: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

itemSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
