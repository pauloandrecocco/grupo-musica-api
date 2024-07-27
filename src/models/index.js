// Models
import Funcao from "./funcao.model.js";
import FuncaoUsuario from "./funcao.usuario.model.js";
import Usuario from "./usuario.model.js";

// Database
import { sequelize } from "../../config/db.js";

(async () => {
  await sequelize.sync({ alter: true });
})();

export { Usuario, Funcao, FuncaoUsuario };
