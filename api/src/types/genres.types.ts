import { Model, Optional } from 'sequelize';

interface IGenreAttributes {
  id: string;
  name: string;
}

interface IGenreCreationAttributes
  extends Optional<IGenreAttributes, 'id'> {}

interface IGenreInstance
  extends Model<IGenreAttributes, IGenreCreationAttributes>,
    IGenreAttributes {}

export { IGenreAttributes, IGenreCreationAttributes, IGenreInstance };
