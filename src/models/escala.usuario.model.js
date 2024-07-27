// Models
import Escala from "./escala.model.js";
import Usuario from "./usuario.model.js";

// Database
import { sequelize } from "../../config/db.js";

const EscalaUsuario = sequelize.define(
  "escalas_usuarios",
  {},
  { underscore: true }
);

Usuario.belongsToMany(Escala, {
  through: EscalaUsuario,
  as: "escalas",
  foreignKey: "usuario_id",
});
Escala.belongsToMany(Usuario, {
  through: EscalaUsuario,
  as: "usuarios",
  foreignKey: "escala_id",
});

export default EscalaUsuario;
