const { Router } = require("express");
const { Genre } = require("../db.js");
const { getAllGenres } = require("../controllers/genreController");

const router = Router();

// GET all genres

router.use("/", async (req, res) => {
  try {
    const genres = await getAllGenres();
    res.status(200).send(genres);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
