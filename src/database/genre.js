'use-strict'
// const db = require("../models/index");

const db = require("../../models/index");

/**
 * Function get all the Genres from database based on the filter.
 * @param  {Object} filter={} Json object contains filter data.
 */
exports.getAllGenres = async (filter = {}) => {
	try {
		let result = await db.genres.findAll({
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while getting Genres from database', error);
		return Promise.reject(error);
	}
}

/**
 * Function get Genre details from database based on the filter provided.
 * @param  {Object} filter Json object contains filter data.
 */
exports.getGenre = async (filter = {}) => {
	try {
		let details = await db.genres.findOne({
			where: filter
		});
		return Promise.resolve(details);
	} catch (error) {
		console.log('Error while getting Genre details from database', error);
		return Promise.reject(error);
	}
}

/**
 * Function save Genre information in database.
 * @param  {Object} bodyData Json object contains Genre data.
 */
exports.saveGenre = async (bodyData) => {
	try {
		console.log(db.genre, "GenreGenreGenre", db.Genre, db)
		await db.genres.create(bodyData);
		return Promise.resolve();
	} catch (error) {
		console.log('Error while saving Genre in database', error);
		return Promise.reject(error);
	}
}

/**
 * Function update Genre based on the filter provided.
 * @param  {Object} filter Json object contains filter data.
 * @param  {Object} bodyData Json object contains data which need to update.
 */
exports.updateGenreDetails = async (filter, bodyData) => {
	try {
		let result = await db.genres.update(bodyData, {
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while updating Genre information in database', error);
		return Promise.reject(error);
	}
}

/**
 * Function delete Genre from database based on filter.
 * @param  {} filter Json object contains filter data.
 */
exports.deleteGenre = async (filter) => {
	try {
		let result = await db.genres.destroy({
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while updating Genre information in database', error);
		return Promise.reject(error);
	}
}