'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 250],
        notEmpty: true,
      }
    },

    last_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 250],
        notEmpty: true,
      }
    },

    gender: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },

    // email must be unique
    email: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
    },

    about: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 1000],
        },
    },

  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
    models.User.belongsToMany(models.Event, {through: 'Attendance'});
  };

  return User;
};