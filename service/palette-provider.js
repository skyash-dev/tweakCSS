require('dotenv').config();
require('./modules/db')();
const express = require('express');
const app = express();
const port = process.env.port || 3002 ;
const cors = require('cors');


// MiddleWares
app.use(cors());
app.use(express.json({ limit: '5mb' }));
const {protect} = require("./modules/jwt");

// Models
const userPalette = require("./models/userPalette");


// Routes
app.get('/', protect, (req, res) => {
  userPalette.findOne({name: req.user.username})
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
});


// listen
app.listen(port, () => {
  console.log('Example App Listening on PORT', port);
});