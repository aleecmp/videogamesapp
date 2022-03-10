const axios = require("axios");
const { Genre } = require("../db.js");
const { API_KEY } = process.env;

const getAllGenres = async () => {
  try {
    let genre = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );

    genre = genre.data.results;
    // console.log(genre);
    console.log(genre.length);
    genre.forEach((e) => {
      Genre.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });

    const dbGenre = await Genre.findAll();

    return dbGenre;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllGenres,
};
