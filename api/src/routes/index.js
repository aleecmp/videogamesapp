const { Router } = require("express");
const genresRoute = require("./genres");
const videogamesRoute = require("./videogames");

const router = Router();

router.use("/videogames", videogamesRoute);
router.use("/genres", genresRoute);

module.exports = router;
