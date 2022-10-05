'use strict';
const router = require("express").Router();

var GenreController = require('../controller/genre');

router.post('/', GenreController.createGenre);

router.get('/', GenreController.getGenres);

router.patch('/:GenreId', GenreController.updateGenre);

router.get('/:GenreId', GenreController.getGenreDetails);

router.delete('/:GenreId', GenreController.deleteGenre);

module.exports = router;
