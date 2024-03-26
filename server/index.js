require('dotenv').config();
require('./modules/db')();
const express = require('express');
const app = express();
const port = process.env.port || 3001 ;
const cors = require('cors');

// Controllers
const userRoutes = require('./routes/userRoutes');


// MiddleWares
app.use(cors());
app.use(express.json({ limit: '5mb' }));


// Routes
app.use('/api/auth', userRoutes);
app.get('/', (req, res) => {
  res.json({status: true, msg: "server is working as expected"});
});


// listen
app.listen(port, () => {
  console.log('Example app listening on port', port);
});