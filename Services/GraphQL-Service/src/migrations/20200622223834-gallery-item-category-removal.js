"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.dropTable("gallerycategory")]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
