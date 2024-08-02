// Models
import { Usuario, Funcao } from "../models/index.js";

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
    return await Usuario.findAll({ include: "funcoes" });
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

async function updateUsuario(usuarioId, campos) {
  try {
    const { funcoes, ...usuario } = campos;

    if (usuario) {
      await Usuario.update(usuario, {
        where: {
          usuarioId,
        },
      });
    }
    if (funcoes) {
      await addFuncoesToUsuario(usuarioId, funcoes);
    }

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

async function addFuncoesToUsuario(usuarioId, funcoesIds) {
  try {
    const usuario = await getUsuario(usuarioId);

    const funcoes = await Funcao.findAll({
      where: {
        funcaoId: funcoesIds,
      },
    });

    if (funcoes.length !== funcoesIds.length) {
      throw errorHandler(
        500,
        "Nem todas as funções com IDs informados foram encontradas."
      );
    }

    await usuario.addFuncoes(funcoes);
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
