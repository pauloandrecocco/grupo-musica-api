// Models
import { Usuario } from "../models/index.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertUsuario(usuario) {
  try {
    return await Usuario.create(usuario, { include: "funcoes" });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function listUsuarios() {
  try {
    return await Usuario.findAll({
      order: [["nome", "ASC"]],
    });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function getUsuario(usuarioId) {
  try {
    return await Usuario.findByPk(usuarioId, { include: "funcoes" });
  } catch (err) {
    throw errorHandler(500, err.message);
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
    throw errorHandler(500, err.message);
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
    throw errorHandler(500, err.message);
  }
}

async function getUsuarioByEmail(email) {
  try {
    return (
      await Usuario.findAll({
        where: { email },
        raw: true,
      })
    )[0];
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

export default {
  insertUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  getUsuarioByEmail,
};
