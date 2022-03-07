const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;

// function to get 100 videogames from api

const getApiInfo = async () => {
  var totalVideogames = [];
  try {
    const api20 = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    const api40 = await axios.get(api20.data.next);
    const api60 = await axios.get(api40.data.next);
    const api80 = await axios.get(api60.data.next);
    const api100 = await axios.get(api80.data.next);

    return Promise.all([api20, api40, api60, api80, api100]).then((res) => {
      let [api20, api40, api60, api80, api100] = res;

      totalVideogames = [
        ...api20.data.results,
        ...api40.data.results,
        ...api60.data.results,
        ...api80.data.results,
        ...api100.data.results,
      ].map((e) => {
        return {
          id: e.id,
          name: e.name,
          image: e.background_image,
          genres: e.genres.map((g) => g.name),
          rating: e.rating,
        };
      });
      console.log(totalVideogames.length);
      return totalVideogames;
    });
  } catch (error) {
    console.log(error);
  }
};

// function to get info from db

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

// concat db and api info

const getAllVgames = async () => {
  const [dbInfo, apiInfo] = await Promise.all([getApiInfo(), getDbInfo()]);
  return [...dbInfo, ...apiInfo];
};

// function to get videogames from api by name

const getVgamesApiByName = async (name) => {
  try {
    let infoName = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    );
    infoName = infoName.data.results;

    let detailsByName = infoName.map((e) => {
      return {
        id: e.id,
        image: e.background_image,
        name: e.name,
        genres: e.genres.map((g) => g.name),
        platforms: e.platforms.map((p) => p.platform.name),
        rating: e.rating,
        description_raw: e.description_raw,
        released: e.released,
      };
    });
    console.log(detailsByName.length);
    return detailsByName;
  } catch (error) {
    console.log(error);
  }
};

// function to get videogames by id from api and db

const getVgameById = async (id) => {
  if (id.length > 8) {
    const vgame = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return vgame;
  } else {
    try {
      let detailsApi = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      detailsApi = detailsApi.data;
      let detailsObj = {
        id: detailsApi.id,
        image: detailsApi.background_image,
        name: detailsApi.name,
        genres: detailsApi.genres.map((e) => e.name),
        platforms: detailsApi.platforms.map((e) => e.platform.name),
        rating: detailsApi.rating,
        description_raw: detailsApi.description_raw,
        released: detailsApi.released,
      };
      return detailsObj;
    } catch (error) {
      console.log(error);
    }
  }
};

// function to post videogames to db

const postVgameDb = async (vgameData) => {
  try {
    let {
      name,
      description,
      released,
      rating,
      image,
      platforms,
      genres,
      createdInDb,
    } = vgameData;

    let vgameCreated = await Videogame.create({
      name,
      description,
      released,
      rating,
      image,
      platforms,
      createdInDb,
    });

    let genreDb = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    vgameCreated.addGenre(genreDb);
    return vgameCreated;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllVgames,
  getVgamesApiByName,
  getVgameById,
  postVgameDb,
};
