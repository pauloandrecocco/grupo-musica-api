// Models
import Usuario from "../models/usuario.model.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertUsuario(usuario) {
  try {
    return await Usuario.create(usuario);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listUsuarios() {
  try {
    return await Usuario.findAll();
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function getUsuario(usuarioId) {
  try {
    return await Usuario.findByPk(usuarioId, {
      raw: true,
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function deleteUsuario(usuarioId) {
  try {
    await Usuario.destroy({
      where: {
        usuarioId,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updateUsuario(usuarioId, usuario) {
  try {
    await Usuario.update(usuario, {
      where: {
        usuarioId,
      },
    });
    return await getUsuario(usuarioId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
};
