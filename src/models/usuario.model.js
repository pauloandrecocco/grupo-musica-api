import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Usuario = sequelize.define(
  "usuarios",
  {
    usuarioId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "usuario_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscore: true }
);

export default Usuario;
