const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')
const validatorMiddleware = require('../middleware/express.validator')
router.post('/register', validatorMiddleware.registerUserValidationRules ,authController.registerController)
router.post('/login',authController.loginController)

module.exports = router;