const db = require('./models');
const { Event } = db;

const EVENTS = [
  {name: "Soccer Game", time: "2021-06-22", description: "Come play soccer with your friends.", location: "Staten Island, New York", lat: 40.579021, long: -74.151535},
  {name: "Basketball Game", time: "2021-06-22", description: "Come play Basketball with your friends.", location: "Staten Island, New York", lat: 40.579021, long: -74.151535},
  {name: "Tennis Game", time: "2021-06-22", description: "Come play Tennis with your friends.", location: "Staten Island, New York", lat: 40.579021, long: -74.151535},
  {name: "Football Game", time: "2021-06-22", description: "Come play Football with your friends.", location: "Staten Island, New York", lat: 40.579021, long: -74.151535},
  {name: "Golf Game", time: "2021-06-22", description: "Come play Golf with your friends.", location: "Staten Island, New York", lat: 40.579021, long: -74.151535}
];

const seed = () => {
  return db.sequelize.sync({force: true})
    .then(() => {
      // Create all the entries
      let eventPromises = EVENTS.map(e => Event.create(e));
      return Promise.all([...eventPromises]);
    });
}

module.exports = seed;