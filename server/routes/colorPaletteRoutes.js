const routes = require('express').Router();
const { protect } = require("../modules/jwt");
const colorPaletteController = require('../controllers/colorPaletteController');
const { createPalette, getallpalettes, getmypalettes, savepalette } = colorPaletteController;

routes.post('/createpalette', protect, createPalette);
routes.get('/getallpalettes', getallpalettes);
routes.get('/getmypalette', protect, getmypalettes);
routes.post('/savemypalette', protect, savepalette);


module.exports = routes;