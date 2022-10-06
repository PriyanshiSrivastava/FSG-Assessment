'use-strict'
// const db = require("../models/index");

const db = require("../../models/index");
const {
	Sequelize, sequelize
} = require("../utils/sequelize");
/**
 * Function get all the Books from database based on the filter.
 * @param  {Object} filter={} Json object contains filter data.
 */
exports.getAllBooks = async (filter = {}) => {
	try {
		let result = await db.books.findAll({
			include: ['genre'],
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while getting Books from database', error);
		return Promise.reject(error);
	}
}

/**
 * Function get Book details from database based on the filter provided.
 * @param  {Object} filter Json object contains filter data.
 */
exports.getBook = async (filter = {}) => {
	try {
		let details = await db.books.findOne({
			include: ['genre'],
			where: filter
		});
		return Promise.resolve(details);
	} catch (error) {
		console.log('Error while getting Book details from database', error);
		return Promise.reject(error);
	}
}

/**
 * Function save Book information in database.
 * @param  {Object} bodyData Json object contains Book data.
 */
exports.saveBook = async (bodyData) => {
	try {
		const alreadyFound = await db.books.findOne({ where: { name: bodyData.name } })
		if (alreadyFound) {
			return Promise.reject('Data already exists');
		} else {
			await db.books.create(bodyData);
		}
		return Promise.resolve();
	} catch (error) {
		console.log('Error while saving Book in database', error);
		return Promise.reject(error);
	}
}

/**
 * Function update Book based on the filter provided.
 * @param  {Object} filter Json object contains filter data.
 * @param  {Object} bodyData Json object contains data which need to update.
 */
exports.updateBookDetails = async (filter, bodyData) => {
	try {
		const alreadyFound = await db.books.findOne({
			where: {
				name: bodyData.name, id: {
					[Sequelize.Op.ne]: filter.id
				}
			}
		})
		if (alreadyFound) {
			return Promise.reject('Data already exists');
		} else {
			let result = await db.books.update(bodyData, {
				where: filter
			});
			return Promise.resolve(result);
		}
	} catch (error) {
		console.log('Error while updating Book information in database', error);
		return Promise.reject(error);
	}
}

/**
 * Function delete Book from database based on filter.
 * @param  {} filter Json object contains filter data.
 */
exports.deleteBook = async (filter) => {
	try {
		let result = await db.books.destroy({
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while updating Book information in database', error);
		return Promise.reject(error);
	}
}