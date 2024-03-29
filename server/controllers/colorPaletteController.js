const ColorPaletteModel = require('../models/colorPalette');
const UserPalette = require('../models/userPalette');


module.exports.createPalette = (req, res) => {
  let { name, color } = req.body;
  console.log(name, color);

  ColorPaletteModel.create({
    madeby: req.user.username,
    name,
    color
  })
  .then( () => {
    res.status(200).json({status: true, msg: "Palette Created Sucessfully"});
  })
  .catch(e => {
    res.status(400).json({status: false, msg: "Something Went Wrong"});
    console.log("CREATE COLOR PALETTE ERROR: ", e);
  })
}

module.exports.getallpalettes = async (req, res) => {
  let palettes = await ColorPaletteModel.find();
  console.log("Palettes", palettes);

  if(palettes){
    res.status(200).json({status: true, palettes});
  }
  else{
    res.status(400).json({status: false, mas: "Something Went Wrong"});
  }
}

module.exports.getmypalettes = async (req, res) => {
  let palettes = await ColorPaletteModel.find({madeby: req.user.username});
  console.log("Palettes",palettes);

  if(palettes){
    res.status(200).json({status: true, palettes});
  }
  else{
    res.status(400).json({status: false, mas: "Something Went Wrong"});
  }
}

module.exports.savepalette = async (req, res) => {
  let { color } = req.body;
  console.log(color);

  UserPalette.create({name: req.user.username, color})
  .then( () => {
    res.status(200).json({status: true, msg: "Palette Saved"});
  })
  .catch(e => {
    res.status(400).json({status: false, msg: "Something Went Wrong"});
    console.log("SAVING PALETTE ERR ", e);
  })
}