// Repositories
import FuncaoRepository from "../repositories/funcao.repository.js";

async function createFuncao(funcao) {
  return await FuncaoRepository.insertFuncao(funcao);
}

async function listFuncoes() {
  return await FuncaoRepository.listFuncoes();
}

async function getFuncao(funcaoId) {
  return await FuncaoRepository.getFuncao(funcaoId);
}

async function deleteFuncao(funcaoId) {
  await FuncaoRepository.deleteFuncao(funcaoId);
}

async function updateFuncao(funcaoId, funcao) {
  return await FuncaoRepository.updateFuncao(funcaoId, funcao);
}

export default {
  createFuncao,
  listFuncoes,
  getFuncao,
  deleteFuncao,
  updateFuncao,
};
