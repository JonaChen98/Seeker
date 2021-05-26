const db = require('./models');
const { Event, User } = db;

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let potteryDescription = "Choplet Ceramic Studio combined with Williamsburg Ceramic Center offer ceramic classes and clay studio space in the heart of Williamsburg, Brooklyn in NYC. Choplet Ceramic School and Studio is home to 2600 square foot dedicated to the art of clay in all its form and welcomes newcomers to pottery and ceramic art as well as professional artists: 23 electric wheels, a kick wheel, hand building tables, 2 extruders, 2 slab roller, a glazing spray booth, a drying closet, 5 kilns and an amazing garden are some of the amenities the studio has to offer. Our amazing garden is also equipped of 8 electric wheel, one quick wheel and hand building tables, making it a perfect outdoor ceramic studio! Our inventory consists of: 8 clay bodies, 2 casting slips, 40 – 50 glazes, various colored engobes and pottery plaster. Williamsburg Ceramic Center is the perfect place for independent clay artists in need of a lot of storage space and 24 hours studio access. Our goal is to inspire creativity, foster self-discovery, and nurture an appreciation for art through our pottery programs and workshops and access to our studio, clay center and gallery.";
const EVENTS = [
  {name: "Pottery Class", date: "June 29th, 2021", time: "5:00 PM - 6:00 PM", description: potteryDescription, location: "238 Grand St, Brooklyn, NY 11211", lat: 40.71174230146201, long: -73.94345288874003, imagePath: "pottery.jpeg", host: "Choplet Gallery and Ceramic Studio"},
  {name: "Socially-Distanced Fireworks Watching", date: "July 4th, 2021", time: "7:30 PM - 8:30 PM", description: loremIpsum, location: "Staten Island, New York", lat: 40.53349191358004, long: -74.13488924224272, imagePath: "fireworks.jpeg", host: "Lorem Ipsum"},
  {name: "Top of the Rock Exhibition", date: "July 13th, 2021", time: "1:00 PM - 2:00 PM", description: loremIpsum, location: "Rockefeller Center", lat: 40.7589108402717, long: -73.97870578821906, imagePath: "newyork.jpeg", host: "Lorem Ipsum"},
  {name: "Yoga for Beginners", date: "July 13th, 2021", time: "10:00 AM - 11:00 AM", description: loremIpsum, location: "Central Park", lat: 40.78170545348324, long: -73.96658006406713, imagePath: "yoga.jpeg", host: "Lorem Ipsum"},
  {name: "Sailing Lesson", date: "July 17th, 2021", time: "4:30 PM - 5:30 PM", description: loremIpsum, location: "Brooklyn College", lat: 40.63154906685194, long: -73.95207776754464, imagePath: "js.jpeg", host: "Lorem Ipsum"},
  {name: "Intro to Vue.js", date: "July 19th, 2021", time: "7:00 PM - 8:00 PM", description: loremIpsum, location: "Sheepshead Bay", lat: 40.58332787875649, long: -73.93888598178644, imagePath: "sailing.jpeg", host: "Lorem Ipsum"},
  {name: "History of Wine", date: "July 20th, 2021", time: "11:00 AM - 12:00 PM", description: loremIpsum, location: "45 Park Ave.", lat: 40.74874045882393, long: -73.97974640171086, imagePath: "wine2.jpeg", host: "Lorem Ipsum"},
  {name: "Should you invest right now?", date: "July 24th, 2021", time: "6:00 PM - 7:00 PM", description: loremIpsum, location: "Wall St.", lat: 40.70621268356366, long: -74.00883165123321, imagePath: "bull.jpeg", host: "Lorem Ipsum"}
];

const USERS = [
  {firstName: "Steven", lastName: "Parks", email: "aaa@gmail.com", gender: "male", about: "about", password: "abc1234", imagePath: "person1.jpeg"},
  {firstName: "Rebecca", lastName: "Jordan", email: "bbb@gmail.com", gender: "female", about: "about", password: "abc1234", imagePath: "person2.jpeg"},
  {firstName: "Michael", lastName: "K.", email: "ccc@gmail.com", gender: "male", about: "about", password: "abc1234", imagePath: "person3.jpeg"},
  {firstName: "Josh", lastName: "Nicks", email: "ddd@gmail.com", gender: "male", about: "about", password: "abc1234", imagePath: "person4.jpeg"},
  {firstName: "Kimberly", lastName: "Richards", email: "eee@gmail.com", gender: "female", about: "about", password: "abc1234", imagePath: "person5.jpeg"},
  {firstName: "Edward", lastName: "L.", email: "abc@gmail.com", gender: "male", about: "about", password: "abc1234", imagePath: "person6.jpeg"},
  {firstName: "Katy", lastName: "Johnson", email: "test@gmail.com", gender: "female", about: "about", password: "abc1234", imagePath: "person7.jpeg"}
];

const ATTENDEES = [
  {eventId: "1", userId: "1"},
  {eventId: "1", userId: "2"},
  {eventId: "1", userId: "3"},
  {eventId: "1", userId: "4"},
  {eventId: "1", userId: "5"},
  {eventId: "1", userId: "6"}
];

const seed = () => {
  return db.sequelize.sync({force: true})
    .then(() => {
      // Create all the entries
      let eventPromises = EVENTS.map(e => Event.create(e));
      let userPromises = USERS.map(e => User.create(e));
      // let attendancePromises = ATTENDEES.map(e => Attendance.create(e));
      return Promise.all([...eventPromises, ...userPromises]);
    })
    .then(() => {
      // Create the associations
      let associationPromises = ATTENDEES.map(a => {
        let eventPromise = Event.findByPk(a.eventId);
        let userPromise = User.findByPk(a.userId);
        return Promise.all([eventPromise, userPromise])
          .then(([event, user]) => {
            return event.addUser(user);
          })
      });
      return Promise.all(associationPromises);
    });
}

module.exports = seed;