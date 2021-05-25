'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}

  Event.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 250],
        notEmpty: true,
      }
    },    
    date: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
          notEmpty: true,
      }
    },
    time: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50],
            notEmpty: true,
        }
    },

    host: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 250],
          notEmpty: true,
      }
    },

    description: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
        }
    },

    location: {
        type: DataTypes.STRING,
        validate: {
            len:[1,50],
            notEmpty: true,
        }
    },

    lat: {
        type: DataTypes.FLOAT,
        validate: {
            len:[1,100],
            notEmpty: true,
        }
    },

    long: {
        type: DataTypes.FLOAT,
        validate: {
            len:[1,100],
            notEmpty: true,
        }
    },

    imagePath: {
      type: DataTypes.STRING
    }

  }, {
    sequelize,
    modelName: 'event'
  });

  Event.associate = (models) => {
    // associations can be defined here
    models.Event.belongsToMany(models.User, {through: 'Attendance'}) // many users can belong to an event
    models.Event.hasOne(models.Request);
  };

  return Event;
};