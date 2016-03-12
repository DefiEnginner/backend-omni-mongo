const zipcodes = require('zipcodes');

module.exports = {
  async up(db) {
    await db.collection('chefs').find().forEach(async (chef) => {
      let { lat, lng, addrString } = chef.address; 
      let zipcode = zipcodes.lookupByCoords(lat, lng).zip;
      let address = { lat, lng, addrString, zipcode }

      await db.collection('chefs').updateOne({
        email: chef.email
      }, {
        $set: { address }
      });
    });
  },

  async down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
