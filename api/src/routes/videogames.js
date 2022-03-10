const { Router } = require("express");
const { Videogame, Genre } = require("../db.js");
const {
  getDbInfo,
  getApiInfo,
  getAllVgames,
  getVgamesApiByName,
  getVgameById,
  postVgameDb,
} = require("../controllers/videogameController");

const router = Router();

// GET all videogames and by name

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const vgamesApi = await getVgamesApiByName(name);
      const vgamesDb = await Videogame.findAll({
        where: { name },
        include: {
          model: Genre,
        },
      });
      const totalGamesName = [...vgamesDb, ...vgamesApi];
      res.status(200).send(totalGamesName.slice(0, 15));
    } else {
      const vgames = await getAllVgames();
      res.status(200).send(vgames);
    }
  } catch (error) {
    console.log(error);
  }
});

// GET videogames by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const vgame = await getVgameById(id);
    vgame
      ? res.status(200).send(vgame)
      : res.status(404).send("Video Game Not found");
  } catch (error) {
    console.log(error);
  }
});

// POST videogame

router.post("/", async (req, res) => {
  const vgameData = req.body;
  try {
    const vgame = await postVgameDb(vgameData);
    res.status(200).send(vgame);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
