require('dotenv').config();
require('./modules/db')();
const express = require('express');
const app = express();
const port = process.env.port || 3001 ;
const cors = require('cors');

// Controllers
const userRoutes = require('./routes/userRoutes');
const colorPalette = require('./routes/colorPaletteRoutes');


// MiddleWares
app.use(cors());
app.use(express.json({ limit: '5mb' }));


// Routes
app.use('/api/auth', userRoutes);
app.use('/api/colorpalette', colorPalette);
app.get('/', (req, res) => {
  res.json({status: true, message: "server is working as expected"});
});


// listen
app.listen(port, () => {
  console.log('Example App Listening on PORT', port);
});