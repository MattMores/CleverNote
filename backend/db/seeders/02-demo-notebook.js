'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', [
        {
        userId: 4,
        title: "WacArnold's"
      },
      {
        userId: 4,
        title: "When Keeping It Real Goes Wrong"
      },
      {
        userId: 4,
        title: "Charlie Murhpy;s True Hollywood Stories"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
