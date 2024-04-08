const routes = require('express').Router();
const { protect } = require("../modules/jwt");
const colorPaletteController = require('../controllers/colorPaletteController');
const { createPalette, getAllPalettes, getMyPalettes, getByID } = colorPaletteController;

routes.post('/createpalette', protect, createPalette);
routes.get('/getallpalettes', getAllPalettes);
routes.get('/getmypalettes', protect, getMyPalettes);
routes.get('/:id',  getByID);

module.exports = routes;