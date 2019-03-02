var express = require('express');
var router = express.Router();

/* Hotel controller contains all routes and db functions relating to hotels*/
const hotelController = require('../controllers/hotel');

/* / => GET  */
router.get('/', hotelController.getHotels);

/* /Hotel => GET  */
router.get('/Hotel/:hotelId', hotelController.getHotel);

module.exports = router;
