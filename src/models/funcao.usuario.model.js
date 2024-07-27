// Models
import Funcao from "./funcao.model.js";
import Usuario from "./usuario.model.js";

// Database
import { sequelize } from "../../config/db.js";

const FuncaoUsuario = sequelize.define(
  "funcoes_usuarios",
  {},
  { underscore: true }
);

Usuario.belongsToMany(Funcao, {
  through: FuncaoUsuario,
  as: "funcoes",
  foreignKey: "usuario_id",
});
Funcao.belongsToMany(Usuario, {
  through: FuncaoUsuario,
  as: "usuarios",
  foreignKey: "funcao_id",
});

export default FuncaoUsuario;
