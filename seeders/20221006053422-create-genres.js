"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("genres", [{
      name: "love story",
    },
    {
      name: "science fiction",
    },
    {
      name: "horror",
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("genres", {});
  }
};


