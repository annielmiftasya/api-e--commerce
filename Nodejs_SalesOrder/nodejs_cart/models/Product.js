const mongoose = require("mongoose");


const productScheme = new mongoose.Schema({
  title: {
     type: String,
     required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// lalu mengekspor model dari product, tujuan mengekspor ini supaya model dari product ini bisa digunakan dimana saja atau reusable
module.exports = mongoose.model("Product", productScheme);