const db = require('./models');
const { Event } = db;

const EVENTS = [
  {name: "Pottery Class", time: "2021-06-29", description: "description", location: "238 Grand St, Brooklyn, NY 11211", lat: 40.71174230146201, long: -73.94345288874003, imagePath: "pottery.jpeg"},
  {name: "Socially-Distanced Fireworks Watching", time: "2021-07-04", description: "description", location: "Staten Island, New York", lat: 40.53349191358004, long: -74.13488924224272, imagePath: "fireworks.jpeg"},
  {name: "Top of the Rock Exhibition", time: "2021-07-13", description: "description", location: "Rockefeller Center", lat: 40.7589108402717, long: -73.97870578821906, imagePath: "newyork.jpeg"},
  {name: "Yoga for Beginners", time: "2021-07-13", description: "description", location: "Central Park", lat: 40.78170545348324, long: -73.96658006406713, imagePath: "yoga.jpeg"},
  {name: "Sailing Lesson", time: "2021-07-17", description: "description", location: "Brooklyn College", lat: 40.63154906685194, long: -73.95207776754464, imagePath: "js.jpeg"},
  {name: "Intro to Vue.js", time: "2021-07-19", description: "description", location: "Sheepshead Bay", lat: 40.58332787875649, long: -73.93888598178644, imagePath: "sailing.jpeg"},
  {name: "History of Wine", time: "2021-07-20", description: "description", location: "45 Park Ave.", lat: 40.74874045882393, long: -73.97974640171086, imagePath: "wine2.jpeg"},
  {name: "Should you invest right now?", time: "2021-07-24", description: "description", location: "Wall St.", lat: 40.70621268356366, long: -74.00883165123321, imagePath: "bull.jpeg"}
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