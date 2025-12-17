const mongoose = require('mongoose')

const ALLOWED_CITIES = [
  'Ahmedabad',
  'Surat',
  'Vadodara',
  'Rajkot',
  'Gandhinagar'
]

const bookSchema = new mongoose.Schema({
  bookImage: {
    type: String,
    required: true
  },
  bookName: {
    type: String,
    required: true,
    trim: true
  },
  bookDescription: {
    type: String,
    required: true,
    maxlength: 500
  },
  bookTag: {
    type: String,
    required: true
  },
  bookAuthor: {
    type: String,
    required: true
  },
  bookWant: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'reserved', 'exchanged'],
    default: 'available'
  },
  city: {
    type: String,
    enum: ALLOWED_CITIES,       // yaha enum
    required: true
  }
}, { timestamps: true })

const bookModel = mongoose.model('Book', bookSchema)

module.exports  = bookModel