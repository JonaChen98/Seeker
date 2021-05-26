'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullName() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init({
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    imagePath: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    about: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 1000],
      },
    },
    passwordHash: { type: DataTypes.STRING },
    password: { 
      type: DataTypes.VIRTUAL, // virtual doesnt store this in the db only exist locally
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password");
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
    models.User.belongsToMany(models.Event, {through: 'Attendance'});
    // models.User.hasOne(models.Attendance);
    models.User.hasOne(models.Request, {as: "requestor"});
    models.User.hasOne(models.Request, {as: "requestee"});
  };

  User.beforeSave((user, options) => { //hashes the provided password and storing it in the db
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};