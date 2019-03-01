const Hotel = require('../models/hotel.js');

exports.postAddHotel = (req, res, next) => {
  const name = req.body.hotelName;
  const location = req.body.location;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const hotel = new Hotel(name, location, price, description, imageUrl);
  hotel
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created hotel');
      res.redirect('/admin/add-hotel');
    })
    .catch(err => {
      console.log(err);
    });
};


exports.getAddHotel = (req, res, next) => {
  res.render('admin/add-hotel');
}