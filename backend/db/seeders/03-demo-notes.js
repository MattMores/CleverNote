'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notes', [
        {
        userId: 4,
        notebookId: 1,
        title: "WacArnold's",
        content: "The leanest burger in the world, could be the meanest burger in the world, if you cook it that way!"
      },
      {
        userId: 4,
        notebookId: 2,
        title: "When Keeping It Real Goes Wrong",
        content: "The character is given a choice: ignore the alleged provocation, or keep it real (get confrontational and be antagonistic with whoever provoked him)"
      },
      {
        userId: 4,
        notebookId: 3,
        title: "Charlie Murhpy's True Hollywood Stories",
        content: "Charlie Murphy retells his encounters with 1980s celebrities, the most popular Rick James beating him up and Prince serving him pancakes. "
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notes', null, {});
  }
};
