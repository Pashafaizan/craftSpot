const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSigninSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  email:{
      type:String,
      required:true
  },
  mobile_number:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  },
type:{
type:String,
required:true
  }

});

module.exports = mongoose.model("seller_signin_schema", sellerSigninSchema);
