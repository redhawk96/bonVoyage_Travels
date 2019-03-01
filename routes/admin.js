var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin');

// /admin/add-product => POST
router.post('/add-hotel', adminController.postAddHotel);

// /admin/add-product => GET
router.get('/add-hotel', adminController.getAddHotel);

module.exports = router;
