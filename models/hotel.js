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

}

module.exports = Hotel;