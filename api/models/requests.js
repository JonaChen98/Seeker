'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Request extends Model {}

  Request.init({
    user_one_id: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1,5],
        notEmpty: true,
      },
    },
    user_two_id: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1,5],
            notEmpty: true,
          },
    },
    status: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1,1],
            notEmpty: true,
          },
    },
    timestamp: {
        type: DataTypes.TIMESTAMP,
        validate: {
            notEmpty: true,
          },
    },
  }, {
    sequelize,
    modelName: 'genre'
  });

  Request.associate = (models) => {
    // associations can be defined here

    // This will add genreId to the Movie model and table
    
  };

  return Genre;
};