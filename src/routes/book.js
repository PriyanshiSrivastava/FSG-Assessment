'use strict';
const router = require("express").Router();

var BookController = require('../controller/book');
router.get('/checkout', BookController.getAllBooksForCheckout);
router.get('/book/:BookId', BookController.getBookById);
router.post('/', BookController.createBook);

router.get('/', BookController.getBooks);

router.patch('/:BookId', BookController.updateBook);

router.get('/:BookId', BookController.getBookDetails);

router.delete('/:BookId', BookController.deleteBook);

module.exports = router;

// module.exports = (app) => {
// 	app.use('/book', router);
// }