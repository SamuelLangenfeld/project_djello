"use strict";
module.exports = (sequelize, DataTypes) => {
  var Board = sequelize.define(
    "Board",
    {
      name: DataTypes.STRING
    }
  );

  Board.associate = function(models) {
    Board.belongsTo(models.User, {
      foreignKey: "owner"
    });
    Board.hasMany(models.List, {
      foreignKey: 'board'
    });
  };
  return Board;
};
