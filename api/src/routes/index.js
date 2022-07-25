const { Router } = require('express');
const genresRoute = require('./genres/genres.js');
const videogamesRoute = require('./videogames/videogames.js');

const router = Router();

router.use('/videogames', videogamesRoute);
router.use('/genres', genresRoute);

module.exports = router;
