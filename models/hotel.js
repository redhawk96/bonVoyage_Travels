const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Hotel {
  constructor(name, location, price, description, imageUrl) {
    this.name = name;
    this.location = location;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('hotels')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('hotels').find().toArray()
      .then(hotels => {
        return hotels;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(hotelId) {
    const db = getDb();
    return db
      .collection('hotels')
      .find({ _id: new mongodb.ObjectId(hotelId) })
      .next()
      .then(hotel => {
        console.log(hotel);
        return hotel;
      })
      .catch(err => {
        console.log(err);
      });
  }

}

module.exports = Hotel;