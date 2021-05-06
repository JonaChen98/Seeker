'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Request extends Model {}

  Request.init({
    // user_one_id: {
    //   type: DataTypes.INTEGER,
    //   validate: {
    //     len: [1,5],
    //     notEmpty: true,
    //   },
    // },
    // user_two_id: {
    //     type: DataTypes.INTEGER,
    //     validate: {
    //         len: [1,5],
    //         notEmpty: true,
    //       },
    // },
    status: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1,1],
            notEmpty: true,
          },
    },
    timestamp: {
        type: DataTypes.DATE,
        validate: {
            notEmpty: true,
          },
    },
  }, {
    sequelize,
    modelName: 'request'
  });

  Request.associate = (models) => {
    // associations can be defined here
    models.Request.hasMany(models.User);
    models.Request.hasMany(models.User);
    models.Request.hasMany(models.Event);
  };

  return Request;
};