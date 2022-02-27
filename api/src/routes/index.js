const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;

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
        };
      });
      console.log(totalVideogames.length);
      return totalVideogames;
    });
  } catch (error) {
    console.log(error);
  }
};

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

getAllVideogames = async (req, res) => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = [...apiInfo, ...dbInfo];
  return infoTotal;
};

// GET all videogames and by name

router.get("/videogames", async (req, res) => {
  const { name } = req.query;
  const videogames = await getAllVideogames();
  if (name) {
    try {
      let infoName = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );
      infoName = infoName.data.results;

      let detailInfo = infoName?.map((e) => {
        return {
          image: e.background_image,
          name: e.name,
          genres: e.genres.map((g) => g.name),
          platforms: e.platforms.map((p) => p.platform.name),
          rating: e.rating,
          description_raw: e.description_raw,
          released: e.released,
        };
      });
      // console.log(detailInfo.length);
      detailInfo.length
        ? res.status(200).send(detailInfo.slice(0, 15))
        : res.status(404).send("Video Game Not found");
    } catch (error) {
      console.log(error);
    }
  } else {
    return res.status(200).send(videogames);
  }
});

// GET videogames by id

router.get("/videogames/:id", async (req, res) => {
  const { id } = req.params;

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
    res.status(200).send(vgame);
  } else {
    try {
      let detailsApi = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      detailsApi = detailsApi.data;
      let detailsObj = {
        image: detailsApi.background_image,
        name: detailsApi.name,
        genres: detailsApi.genres.map((e) => e.name),
        platforms: detailsApi.platforms.map((e) => e.platform.name),
        rating: detailsApi.rating,
        description_raw: detailsApi.description_raw,
        released: detailsApi.released,
      };

      res.status(200).send(detailsObj);
    } catch (error) {
      console.log(error);
    }
  }
});

// POST videogame

router.post("/videogame", async (req, res) => {
  let { name, description, released, rating, image, platforms, genres } =
    req.body;

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

  return res.status(200).send("Videogame Created Successfully");
});

// GET genres

router.get("/genres", async (req, res) => {
  try {
    let genre = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    genre = genre.data.results.map((g) => {
      return {
        id: g.id,
        name: g.name,
      };
    });
    // console.log(genre);
    // console.log(genre.length);
    genre.forEach((e) => {
      Genre.findOrCreate({
        where: {
          id: e.id,
          name: e.name,
        },
      });
    });

    const dbGenre = await Genre.findAll();
    res.send(dbGenre);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
