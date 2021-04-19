'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
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
          notEmpty: true,
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