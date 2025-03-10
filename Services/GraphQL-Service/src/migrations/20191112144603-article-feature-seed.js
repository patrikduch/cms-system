"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("feature", [
        {
          name: "ArticleSystem",
          code: "article_system",
          description: "Integrace článkovacího systému",
          isEnabled: true,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ])
    ]);

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
