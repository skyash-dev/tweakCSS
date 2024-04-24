const mongoose = require('mongoose');

const userPaletteSchema = mongoose.Schema({
  name: String,
  color:{
    colorPrimary: String,
    colorSecondary: String,
  }
})

module.exports = mongoose.model("User Site Palette", userPaletteSchema);