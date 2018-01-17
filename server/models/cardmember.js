'use strict';
module.exports = (sequelize, DataTypes) => {
  var CardMember = sequelize.define('CardMember', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CardMember;
};