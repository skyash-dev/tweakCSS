const routes = require('express').Router();
const { protect } = require("../modules/jwt");
const colorPaletteController = require('../controllers/colorPaletteController');
const { createPalette, getallpalettes, getmypalettes, savepalette, getbyid } = colorPaletteController;

routes.post('/createpalette', protect, createPalette);
routes.get('/getallpalettes', getallpalettes);
routes.get('/getmypalette', protect, getmypalettes);
routes.post('/savemypalette', protect, savepalette);
routes.get('/:id',  getbyid);

module.exports = routes;