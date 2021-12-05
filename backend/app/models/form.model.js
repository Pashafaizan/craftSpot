const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_price: {
    type: Number,
    required: true,
  },
  item_description: {
    type: String,
  },

  images: {
    type: [],
  },

  place_of_origin: {
    type: String,
    required: true,
  },

  material: {
    type: String,
    required: true,
  },
  item_color: {
    type: String,
 
  },
  item_type: {
    type: String,
  
  },

  item_weight: {
    type: Number,
  },
  item_shape: {
    type: String,
  },

  show_type: {
    type: String
    
  },
 
});

module.exports = mongoose.model("products", formSchema);
