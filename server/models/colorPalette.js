const mongoose = require('mongoose');

const colorPaletteSchema = mongoose.Schema({
  madeby: String,
  name: String,
  color:{
    colorPrimary: String,
    colorSecondary: String,
    colorSecondary: String,
    textColor: String,
    borderColor: String,
    errorColor: String,
    warningColor:String
  }
});


module.exports = mongoose.model("colorPaletteModel", colorPaletteSchema);