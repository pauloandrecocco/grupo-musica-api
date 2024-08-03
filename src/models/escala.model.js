import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Escala = sequelize.define(
  "escalas",
  {
    escalaId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: "escala_id",
    },
    data: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscore: true }
);

export default Escala;
