import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Funcao = sequelize.define(
  "funcoes",
  {
    funcaoId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: "funcao_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscore: true }
);

export default Funcao;
