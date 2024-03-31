const ColorPaletteModel = require('../models/colorPalette');
const UserPalette = require('../models/userPalette');
const ObjectId = require('mongodb').ObjectId; 
const fs = require('fs')


module.exports.createPalette = (req, res) => {
  console.log(req)
  let { name, color } = req.body;
  console.log(name, color);

  ColorPaletteModel.create({
    madeby: req.user.username,
    name,
    color
  })
  .then( (result) => {
    res.status(200).json({status: true, msg: "Palette Created Sucessfully", id:result._id});
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
module.exports.getbyid = async (req, res) => {
  let { id } = req.params;
  let o_id = new ObjectId(id)

  ColorPaletteModel.findOne({ _id:o_id })
    .then((palette) => {
      if (!palette) {
        res.status(404);
      } else {
        // fs.writeFile('./public/style.css', `:root{
        //   --colorPrimary: ${palette['color']['colorPrimary']};
        //   --colorSecondary: ${palette['color']['colorSecondary']};
        //   --textColor: ${palette['color']['textColor']};
        //   --borderColor: ${palette['color']['borderColor']};
        //   --errorColor: ${palette['color']['errorColor']};
        //   --warningColor: ${palette['color']['warningColor']};
        // }`, function(err){ 
        //   if (err) throw err;
        // }) 

        let css=""
        css += Object.keys(palette.color).map((keyName)=>`--${keyName}: ${palette.color[keyName]}`)
        css = css.replaceAll(',',';')
        fs.writeFile('./public/style.css', `:root{${css}}`, function(err){ 
            if (err) throw err;
          }) 
        fs.readFile('./public/style.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          return res.end();
        });
      }
    })
}