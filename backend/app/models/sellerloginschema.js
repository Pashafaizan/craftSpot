const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seller_login_schema = new Schema({

  email:{
      type:email,
      required:true
  },
  password:{
      type:String,
      required:true
  }

});

module.exports = mongoose.model("seller_signin_schema", seller_login_schema);
