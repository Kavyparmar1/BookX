const {body,  validationResult}  = require('express-validator')

async function validate(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

 const registerUserValidationRules = [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2, max: 30 }).withMessage('Name must be 2-30 characters'),
    
    body('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email format')
      .normalizeEmail(),
    
    body('gender')
      .notEmpty().withMessage('Gender is required')
      .isIn(['male', 'female', 'other']).withMessage('Invalid gender value'),
    
    body('password')
      .notEmpty().withMessage('Password is required')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
      validate
  ]
  module.exports ={
     registerUserValidationRules
  }