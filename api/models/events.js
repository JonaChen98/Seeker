'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Events extends Model {}

  Events.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 250],
        notEmpty: true,
      }
    },
    time: {
        type: DataTypes.TIMESTAMP,
        validate: {
            notEmpty: true,
        }
    },

    description: {
        type: DataTypes.STRING,
        validate: {
            len:[1,1000],
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

  }, {
    sequelize,
    modelName: 'event'
  });

  Events.associate = (models) => {
    // associations can be defined here
      models.Events.belongstomany(models.User) // many users can belong to an event
  };

  return Events;
};