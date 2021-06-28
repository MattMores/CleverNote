'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', [
        {
        userId: 4,
        title: "Notebook #1"
      },
      {
        userId: 4,
        title: "Notebook #2"
      },
      {
        userId: 4,
        title: "Notebook #3"
      },
      {
        userId: 1,
        title: "Notebook"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
