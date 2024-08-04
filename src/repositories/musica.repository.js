// Models
import { Musica } from "../models/index.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertMusica(musica) {
  try {
    return await Musica.create(musica);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function listMusicas(filterParams) {
  try {
    return await Musica.findAll({
      where: filterParams,
      order: [["nome", "ASC"]],
    });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function getMusica(musicaId) {
  try {
    return await Musica.findByPk(musicaId);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function deleteMusica(musicaId) {
  try {
    await Musica.destroy({
      where: {
        musicaId,
      },
    });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function updateMusica(musicaId, musica) {
  try {
    await Musica.update(musica, {
      where: {
        musicaId,
      },
    });
    return await getMusica(musicaId);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

export default {
  insertMusica,
  listMusicas,
  getMusica,
  deleteMusica,
  updateMusica,
};
