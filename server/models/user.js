"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Board, {
      foreignKey: "owner"
    });
    User.belongsToMany(models.Card, {
      through: models.CardMember,
      foreignKey: "userId"
    });
  };
  return User;
};
