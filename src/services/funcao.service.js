// Repositories
import FuncaoRepository from "../repositories/funcao.repository.js";

// Utils
import {
  usuarioReturnDTO,
  funcaoReturnDTO,
  funcoesReturnDTO,
} from "../utils/dto.js";

async function createFuncao(funcao) {
  return funcaoReturnDTO(await FuncaoRepository.insertFuncao(funcao));
}

async function listFuncoes() {
  return funcoesReturnDTO(await FuncaoRepository.listFuncoes());
}

async function getFuncao(funcaoId, withDTO = true) {
  const funcao = await FuncaoRepository.getFuncao(funcaoId);
  return withDTO ? funcaoReturnDTO(funcao) : funcao;
}

async function deleteFuncao(funcaoId) {
  await FuncaoRepository.deleteFuncao(funcaoId);
}

async function updateFuncao(funcaoId, funcao) {
  return funcaoReturnDTO(await FuncaoRepository.updateFuncao(funcaoId, funcao));
}

async function listUsuariosByFuncao(funcaoId) {
  const funcao = await getFuncao(funcaoId, false);
  const usuarios = await funcao.getUsuarios();

  return usuarios.map((usuario) => usuarioReturnDTO(usuario));
}

export default {
  createFuncao,
  listFuncoes,
  getFuncao,
  deleteFuncao,
  updateFuncao,
  listUsuariosByFuncao,
};
