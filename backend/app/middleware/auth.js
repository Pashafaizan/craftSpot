const { check } = require("express-validator");
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.registerValidation = [
  
    check("sponser_id", "Sponser Id is required").not().isEmpty(),
    check("sponser_name", "Sponser name is required").not().isEmpty(),
    check("user_name", "User name is required").not().isEmpty(),
    check("date_of_birth", "Date of birth is required").not().isEmpty(),
    check("mobile_number", "Mobile number is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
];    

exports.loginValidation = [
  check("user_id", "Member Id is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
]; 

exports.tokenValidation = [
  check("refresh_token", "TOken is required").not().isEmpty()
]
validationResult

exports.secure = async (req,res,next) => {
    
  
    let {accessToken} = req.body
    if (!accessToken) {
      accessToken = req.header('Authorization')
    }
    
    if(!accessToken) {
      return res.json({message:"Unauthorized"}).status(400);
    }
    try {
      const jwtData = await jwt.verify(accessToken,process.env.SECRET_KEY)
      if(!jwtData) {
        return res.json({message:"Unauthorized"}).status(400);
      }
      req.user = jwtData.user
      next()
    } catch(err) {
  
      return res.json({message:"Unauthorized"}).status(400);
    }
  }