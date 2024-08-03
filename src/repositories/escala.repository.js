// Models
import { Escala } from "../models/index.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertEscala(escala) {
  try {
    return await Escala.create(escala, { include: ["musicas", "usuarios"] });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function listEscalas() {
  try {
    return await Escala.findAll({ include: ["musicas", "usuarios"] });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function getEscala(escalaId) {
  try {
    return await Escala.findByPk(escalaId, {
      include: ["musicas", "usuarios"],
    });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function deleteEscala(escalaId) {
  try {
    await Escala.destroy({
      where: {
        escalaId,
      },
    });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function updateEscala(escalaId, escala) {
  try {
    await Escala.update(escala, {
      where: {
        escalaId,
      },
    });
    return await getEscala(escalaId);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

export default {
  insertEscala,
  listEscalas,
  getEscala,
  deleteEscala,
  updateEscala,
};
