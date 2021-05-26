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
        type: DataTypes.BOOLEAN,
        validate: {
            //len: [1,1],
            notEmpty: true,
          },
    },
  }, {
    sequelize,
    modelName: 'request'
  });

  Request.associate = (models) => {
    // associations can be defined here
    // not sure about this part
    // models.Request.hasOne(models.User, {as: "requestor"});
    // models.Request.hasOne(models.User, {as: "requestee"});
    //models.Request.hasMany(models.Event);
    // models.User.belongsToMany(models.Event, {through: 'Request'});
    // models.User.belongsToMany(models.Event, {through: 'Request'});
   
  };

  return Request;
};