// Models
import { Funcao } from "../models/index.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertFuncao(funcao) {
  try {
    return await Funcao.create(funcao);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function listFuncoes() {
  try {
    return await Funcao.findAll();
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function getFuncao(funcaoId) {
  try {
    return await Funcao.findByPk(funcaoId);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function deleteFuncao(funcaoId) {
  try {
    await Funcao.destroy({
      where: {
        funcaoId,
      },
    });
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

async function updateFuncao(funcaoId, funcao) {
  try {
    await Funcao.update(funcao, {
      where: {
        funcaoId,
      },
    });
    return await getFuncao(funcaoId);
  } catch (err) {
    throw errorHandler(500, err.message);
  }
}

export default {
  insertFuncao,
  listFuncoes,
  getFuncao,
  deleteFuncao,
  updateFuncao,
};
