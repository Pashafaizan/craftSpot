const seller_model = require("../models/sellerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");


exports.sellerSignup =async (data)=>{
  console.log(data);
  const {
    
    user_name,
    
    mobile_number,
    email,
    password,
    type
    
  } = data;

    const isCheck = await seller_model.findOne({email:email});
 
if(isCheck){
    return {
        message: "You have alredy registerd the email"
    }
}
const hash = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(password, hash);
    let newUser = seller_model({
      
      
      user_name: user_name,
      
      mobile_number: mobile_number,
      email: email,
      password: encryptPassword,
      type:type
     
    });
    await newUser.save();
  //  const dataModel = await new seller_model(data);
  //   await dataModel.save();
    return {
      message: "Your registeration has been successfully",
    };
}


exports.sellerLogin = async (data) => {
     
 
  
      const { email, password } = data;
      const user = await seller_model.findOne({ email: email });
      if (!user) {
        return res.json({ message: "Invalid login credentials" });
      }
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (!verifyPassword) {
        return  {message: "Invalid login credentials" };
      }
      const payload = {
        user: {
          id: user._id,
           mobile_number: user.mobile_number,
          email: user.email,
        },
      };
      const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 30 * 60,
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_KEY, {
        expiresIn: 30 * 60 * 60,
      });
  
      return {
        message: "Login successfully",
        access_token: accessToken,
        refresh_token: refreshToken,
        user: payload.user,
      };
     
  };


  exports.refreshToken = async (req, res) => {
    try {
      const { refresh_token } = req.body;
      if (!refresh_token) {
        return res.json({ message: "Unauthorized" }).status(422);
      }
      const jwtData = await jwt.verify(refresh_token, process.env.REFRESH_KEY);
      if (!jwtData) {
        return res.json({ message: "Unauthorized" }).status(401);
      }
      const payload = { user: jwtData.user };
  
      let accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 30 * 60,
      });
      let RefreshToken = jwt.sign(payload, process.env.REFRESH_KEY, {
        expiresIn: 35 * 60 * 60,
      });
      return res
        .json({
          message: "session refreshed",
          accessToken: accessToken,
          refreshToken: RefreshToken,
          user: jwtData.user,
        })
        .status(200);
    } catch (err) {
      console.log(err.message);
    }
  };