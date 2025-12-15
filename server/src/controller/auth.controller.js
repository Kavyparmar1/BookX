const userModel = require("../model/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//register controller
async function registerController(req,res){
 const {name,email,gender,password} = req.body 
  const emailExist = await userModel.findOne({email})
  if(emailExist){
    return res.status(400).json({message:"Email already exists"})
  }
 
  const hashPassword = await bcrypt.hash(password,10)
  const user = await userModel.create({
    name,
    email,
    gender,
    password:hashPassword
  })
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
  res.cookie('token',token)
  res.status(201).json({message:"User created successfully",user})
}

//login controller
async function loginController(req,res){
  try {
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"User not found"})
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid password"})
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie('token',token)
    res.status(200).json({message:"Login successful",user})
  } catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
}

module.exports = {
    registerController,
    loginController
}