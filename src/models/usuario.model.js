import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const tableName = "usuarios";
const Usuario = sequelize.define(
  tableName,
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

await sequelize.sync({ alter: true }).catch((error) => {
  console.error(`Falha ao sincronizar tabela "${tableName}": ${error}`);
});

export default Usuario;
