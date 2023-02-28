import { Model, Optional } from 'sequelize';

interface IVideogameAttributes {
  id: string;
  name: string;
  description: string;
  released: string | null;
  rating: number | null;
  platforms: string[];
  image: string;
  createdInDb: boolean;
}

interface IVideogameCreationAttributes
  extends Optional<IVideogameAttributes, 'id'> {}

interface IVideogamesInstance
  extends Model<IVideogameAttributes, IVideogameCreationAttributes>,
    IVideogameAttributes {}

export {
  IVideogameAttributes,
  IVideogameCreationAttributes,
  IVideogamesInstance,
};
