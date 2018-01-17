"use strict";
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define("List", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    description: DataTypes.STRING
  });

  List.associate = function(models) {
    List.belongsTo(models.Board, {
      foreignKey: "board"
    });
    List.hasMany(models.Card, {
      foreignKey: "list"
    });
  };

  return List;
};
