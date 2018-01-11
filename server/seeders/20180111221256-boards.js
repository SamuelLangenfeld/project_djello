"use strict";
var models = require("./../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var boards = [];
    for (let i = 0; i < 10; i++) {
      boards.push({
        name: `Board ${i}`,
        owner: i + 1
      });
    }
    return queryInterface.bulkInsert("Boards", boards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Boards", null, {}, models.Board);
  }
};
