"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("books", [{
      "name": "test book1",
      "imageLink": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "price": 20,
      "genreId": 1
    },
    {
      "name": "test book2",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
      "price": 10,
      "genreId": 3
    },
   ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("books", {});
  }
};


