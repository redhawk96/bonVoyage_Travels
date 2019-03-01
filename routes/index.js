var express = require('express');
var router = express.Router();

/* Hotel controller contains all routes and db functions relating to hotels*/
const hotelController = require('../controllers/hotel');

/* GET home page. */
router.get('/', hotelController.getHotels);

module.exports = router;
