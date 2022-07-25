const { Router } = require('express');

const {
  getAllVideogamesAndByName,
  getVgameById,
  postVgameDb,
  updateVideogame,
  deleteVideogame,
} = require('../../controllers/videogames.js');

const router = Router();

router.get('/', getAllVideogamesAndByName);
router.get('/:id', getVgameById);
router.post('/', postVgameDb);
router.put('/update/:id', updateVideogame);
router.delete('/delete/:id', deleteVideogame);

module.exports = router;
