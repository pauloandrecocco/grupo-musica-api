// Models
import Funcao from "./funcao.model.js";
import Usuario from "./usuario.model.js";

// Database
import { sequelize } from "../../config/db.js";

// Many-to-many relationships
Usuario.belongsToMany(Funcao, {
  through: "funcoes_usuarios",
  as: "funcoes",
  foreignKey: "usuario_id",
});
Funcao.belongsToMany(Usuario, {
  through: "funcoes_usuarios",
  as: "usuarios",
  foreignKey: "funcao_id",
});

(async () => {
  await sequelize.sync({ alter: true });
})();

export { Usuario, Funcao };
