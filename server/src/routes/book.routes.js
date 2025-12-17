const express = require('express')
const router = express.Router()
const bookController  = require('../controller/book.controller')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
router.post('/upload',upload.array("image",5),bookController.bookUpload)

module.exports = router;