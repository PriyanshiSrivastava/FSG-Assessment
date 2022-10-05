// 'use strict';
var Book = require('../database/book');

/**
 * Get Books details from database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getBooks = async (req, res) => {
	try {
		let results = await Book.getAllBooks();
		if (results && results.length) {
			res.render("lists.ejs", { books: results });
	} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting Books', error);
		return res.status(403).json({
			message: error
		});
	}
}
exports.getAllBooksForCheckout = async (req, res) => {
	try {
		let results = await Book.getAllBooks();
		if (results && results.length) {
			res.render("addItems.ejs", { books: results });
	} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting Books', error);
		return res.status(403).json({
			message: error
		});
	}
}
/**
 * Create Book and save data in database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.createBook = async (req, res) => {
	try {
		await Book.saveBook(req.body);
		return res.status(201).json();
		res.redirect("/");
	} catch (error) {
		console.log('Error while creating Book', error);
		return res.status(400).json({
			message: error
		});
	}
}

/**
 * Update Book details
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.updateBook = async (req, res) => {
	try {
		let data = req.body;
		let filter = {
			id: req.params.BookId
		}
		let result = await Book.updateBookDetails(filter, data);
		if (result && result.length && result[0]) {
			return res.status(200).json('Successfully updated');
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while updating Book', error);
		return res.status(400).json({
			message: error
		});
	}
}

/**
 * Controller get Book details based on Bookid.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getBookDetails = async (req, res) => {
	try {
		let filter = {
			id: req.params.BookId
		}
		let details = await Book.getBook(filter);
		if (details) {
			// return  res.status(200).json(details);
		res.render("details.ejs", { details });
	} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting Book details', error);
		return res.status(400).json({
			message: error
		});
	}
}

exports.getBookById = async (req, res) => {
	try {
		let filter = {
			id: req.params.BookId
		}
		let details = await Book.getBook(filter);
		if (details) {
			return  res.status(200).json(details);
	} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting Book details', error);
		return res.status(400).json({
			message: error
		});
	}
}

/**
 * Delete Book information.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.deleteBook = async (req, res) => {
	try {
		let filter = {
			id: req.params.BookId
		}
		let result = await Book.deleteBook(filter);
		if (result) {
			return res.status(204).json();
		} else {
			return res.status(404).json();
		}
	} catch (error) {
		console.log('Error while deleting Book', error);
		return res.status(500).json({
			message: error.message
		});
	}
}