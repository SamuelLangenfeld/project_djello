"use strict";
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Card.associate = function(models) {
    Card.belongsTo(models.List, {
      foreignKey: "list"
    });
    Card.belongsToMany(models.User, {
      through: models.CardMember,
      foreignKey: "cardId"
    });
  };
  return Card;
};
