import { Sequelize } from 'sequelize';
import { initGenreModel, initVideogameModel } from '../models';

import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from '../../config';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
  native: false,
});

initVideogameModel(sequelize);
initGenreModel(sequelize);

const { Videogame, Genre } = sequelize.models;

Videogame.belongsToMany(Genre, { through: 'VideogameGenres' });
Genre.belongsToMany(Videogame, { through: 'VideogameGenres' });

const { VideogameGenres } = sequelize.models;

export {
  Videogame,
  Genre,
  VideogameGenres
};

