const axios = require('axios');
const { Genre } = require('../db.js');
const { API_KEY } = process.env;

const getAllGenres = async (req, res) => {
  try {
    let genre = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    genre = genre.data.results;
    genre.forEach((e) => {
      Genre.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });
    const dbGenre = await Genre.findAll();
    dbGenre ? res.status(200).send(dbGenre) : res.status(500).send('Error');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllGenres,
};
