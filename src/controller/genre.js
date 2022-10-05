'use strict';
var Genre = require('../database/genre');

/**
 * Get Genres details from database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getGenres = async (req, res) => {
	try {
		let results = await Genre.getAllGenres();
		if (results && results.length) {
			return res.status(200).json(results);
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting Genres', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Create Genre and save data in database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.createGenre = async (req, res) => {
	try {
		await Genre.saveGenre(req.body);
		return res.status(201).json();
	} catch (error) {
		console.log('Error while creating Genre', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Update Genre details
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.updateGenre = async (req, res) => {
	try {
		let data = req.body;
		let filter = {
			id: req.params.GenreId
		}
		let result = await Genre.updateGenreDetails(filter, data);
		if (result && result.length && result[0]) {
			return res.status(200).json('Siccessfully updated');
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while updating Genre', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Controller get Genre details based on Genreid.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getGenreDetails = async (req, res) => {
	try {
		let filter = {
			id: req.params.GenreId
		}
		let details = await Genre.getGenre(filter);
		if (details) {
			return res.status(200).json(details);
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting Genre details', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Delete Genre information.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.deleteGenre = async (req, res) => {
	try {
		let filter = {
			id: req.params.GenreId
		}
		let result = await Genre.deleteGenre(filter);
		if (result) {
			return res.status(204).json();
		} else {
			return res.status(404).json();
		}
	} catch (error) {
		console.log('Error while deleting Genre', error);
		return res.status(500).json({
			message: error.message
		});
	}
}