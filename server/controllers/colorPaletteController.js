const ColorPaletteModel = require('../models/colorPalette');
const UserPalette = require('../models/userPalette');
const Types = require('mongoose').Types; 
const fs = require('fs')


module.exports.createPalette = (req, res) => {
  // console.log(req)
  let { name, color } = req.body;
  // console.log(name, color);

  ColorPaletteModel.create({
    madeBy: req.user.username,
    name,
    color
  })
  .then( (result) => {
    res.status(200).json({status: true, message: "PALETTE CREATED SUCESSFULLY!", id:result._id});
  })
  .catch(e => {
    res.status(400).json({status: false, message: "SOMETHING WENT WRONG!"});
    // console.log("CREATE COLOR PALETTE ERROR: ", e);
  })
}

module.exports.getAllPalettes = async (req, res) => {
  let palettes = await ColorPaletteModel.find();
  // console.log("PALETTES", palettes);

  if(palettes){
    res.status(200).json({status: true, palettes});
  }
  else{
    res.status(400).json({status: false, message: "SOMETHING WENT WRONG!"});
  }
}

module.exports.getMyPalettes = async (req, res) => {
  let palettes = await ColorPaletteModel.find({madeBy: req.user.username});
  // console.log("PALETTES",palettes);

  if(palettes){
    res.status(200).json({status: true, palettes});
  }
  else{
    res.status(400).json({status: false, message: "SOMETHING WENT WRONG!"});
  }
}

// module.exports.savePallete = async (req, res) => {
//   let { color } = req.body;
//   console.log(color);

//   UserPalette.create({name: req.user.username, color})
//   .then( () => {
//     res.status(200).json({status: true, msg: "Palette Saved"});
//   })
//   .catch(e => {
//     res.status(400).json({status: false, msg: "Something Went Wrong"});
//     console.log("SAVING PALETTE ERR ", e);
//   })
// }

module.exports.getByID = async (req, res) => {
  let { id } = req.params;
  let o_id = new Types.ObjectId(id)
  ColorPaletteModel.findOne({ _id:o_id })
  .then((palette) => {
    if (!palette) {
      res.status(404);
    } else {
        let css=""
        css += Object.keys(palette.color).map((keyName)=>`--${keyName}: ${palette.color[keyName]}`)
        css = css.replaceAll(',',';')
            res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(`:root{${css}}`);
          return res.end();
      }
    })
}