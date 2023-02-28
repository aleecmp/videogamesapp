import { DataTypes, Sequelize } from 'sequelize';
import {
  IVideogameCreationAttributes,
  IVideogamesInstance,
} from '../../types';

export default function initVideogameModel(sequelize: Sequelize) {
  return sequelize.define<
    IVideogamesInstance,
    IVideogameCreationAttributes
  >(
    'Videogame',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          'https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg',
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
}
