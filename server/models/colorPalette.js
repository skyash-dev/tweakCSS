const mongoose = require('mongoose');

const colorPaletteSchema = mongoose.Schema({
  madeby: String,
  name: String,
  color:{
    colorPrimary: String,
    colorSecondary: String,
  }
});


module.exports = mongoose.model("colorPaletteModel", colorPaletteSchema);