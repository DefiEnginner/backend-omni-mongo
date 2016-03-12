module.exports = {
  async up(db) {
    await db.collection('chefs').updateMany({}, {
      $set: {
        num_transactions: 0
      }
    });
  },

  async down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
