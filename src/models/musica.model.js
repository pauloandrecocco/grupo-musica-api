import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Musica = sequelize.define(
  "musicas",
  {
    musicaId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: "musica_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    autor: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tema: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tonalidade: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscore: true }
);

export default Musica;
