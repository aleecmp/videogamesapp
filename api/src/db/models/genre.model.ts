import { DataTypes, Sequelize } from 'sequelize';
import { IGenreCreationAttributes, IGenreInstance } from '../../types';

export default function initGenreModel(sequelize: Sequelize) {
  return sequelize.define<IGenreInstance, IGenreCreationAttributes>(
    'genre',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
}
