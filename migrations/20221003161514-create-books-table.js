'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageLink: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
      });
  },

  down: queryInterface => {
    return queryInterface.dropTable('books');
  }
};