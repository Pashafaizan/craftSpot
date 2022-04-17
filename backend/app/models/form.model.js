const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_description: {
    type: String,
  },

  images: {
    type: [],
  },


  material: {
    type: String,
    required: true,
  },
  item_color: {
    type: String,
 
  },
  item_weight: {},
  
  item_shape: {
    type: String,
  },
  
  categories:{
    type:String
  },
  item_dimensions:{}
 
});

module.exports = mongoose.model("products", formSchema);
