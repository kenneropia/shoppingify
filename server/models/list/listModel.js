const mongoose = require('mongoose')

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 12,
      min: 4,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    list: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
          required: true,
        },
        amount: {
          type: Number,
          min: 1,
          default: 1,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
)

// listSchema.index({ user: 1, item: 1 }, { unique: true })

listSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

listSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const List = mongoose.model('List', listSchema)

module.exports = List
