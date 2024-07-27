// Models
import Escala from "./escala.model.js";
import EscalaMusica from "./escala.musica.model.js";
import EscalaUsuario from "./escala.usuario.model.js";
import Funcao from "./funcao.model.js";
import FuncaoUsuario from "./funcao.usuario.model.js";
import Musica from "./musica.model.js";
import Usuario from "./usuario.model.js";

// Database
import { sequelize } from "../../config/db.js";

(async () => {
  await sequelize.sync({ alter: true });
})();

export {
  Escala,
  EscalaMusica,
  EscalaUsuario,
  Funcao,
  FuncaoUsuario,
  Musica,
  Usuario,
};
