// Models
import Escala from "./escala.model.js";
import Musica from "./musica.model.js";

// Database
import { sequelize } from "../../config/db.js";

const EscalaMusica = sequelize.define(
  "escalas_musicas",
  {},
  { underscore: true }
);

Musica.belongsToMany(Escala, {
  through: EscalaMusica,
  as: "escalas",
  foreignKey: "musica_id",
});
Escala.belongsToMany(Musica, {
  through: EscalaMusica,
  as: "musicas",
  foreignKey: "escala_id",
});

export default EscalaMusica;
