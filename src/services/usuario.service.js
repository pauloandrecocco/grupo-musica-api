// Services
import FuncaoService from "./funcao.service.js";

// Repositories
import UsuarioRepository from "../repositories/usuario.repository.js";

// Utils
import { encryptPassword } from "../utils/password.js";
import {
  escalasReturnDTO,
  usuarioReturnDTO,
  usuariosReturnDTO,
  funcoesReturnDTO,
} from "../utils/dto.js";

async function createUsuario(usuario) {
  const hashedSenha = await encryptPassword(usuario.senha);
  const usuarioCriado = await UsuarioRepository.insertUsuario({
    ...usuario,
    senha: hashedSenha,
  });

  return usuarioReturnDTO(usuarioCriado);
}

async function listUsuarios() {
  const usuarios = await UsuarioRepository.listUsuarios();
  return usuariosReturnDTO(usuarios);
}

async function getUsuario(usuarioId, withDTO = true) {
  const usuario = await UsuarioRepository.getUsuario(usuarioId);
  return withDTO ? usuarioReturnDTO(usuario) : usuario;
}

async function deleteUsuario(usuarioId) {
  await UsuarioRepository.deleteUsuario(usuarioId);
}

async function updateUsuario(usuarioId, usuario) {
  if (usuario?.senha) {
    usuario.senha = await encryptPassword(usuario.senha);
  }
  const usuarioAtualizado = await UsuarioRepository.updateUsuario(
    usuarioId,
    usuario
  );

  return usuarioReturnDTO(usuarioAtualizado);
}

async function getUsuarioByEmail(email) {
  return await UsuarioRepository.getUsuarioByEmail(email);
}

async function addFunctionToUsuario(usuarioId, funcaoId) {
  const usuario = await getUsuario(usuarioId, false);
  const funcao = await FuncaoService.getFuncao(funcaoId, false);
  await usuario.addFuncoes([funcao]);

  return getUsuario(usuarioId);
}

async function listFunctionsByUsuario(usuarioId) {
  const usuario = await getUsuario(usuarioId, false);
  const funcoes = await usuario.getFuncoes();

  return funcoesReturnDTO(funcoes);
}

async function removeFunctionFromUsuario(usuarioId, funcaoId) {
  const usuario = await getUsuario(usuarioId, false);
  const funcao = await FuncaoService.getFuncao(funcaoId, false);
  await usuario.removeFuncoes([funcao]);

  return getUsuario(usuarioId);
}

async function listEscalasByUsuario(usuarioId) {
  const usuario = await getUsuario(usuarioId, false);
  const escalas = await usuario.getEscalas();

  return escalasReturnDTO(escalas);
}

export default {
  createUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  getUsuarioByEmail,
  addFunctionToUsuario,
  listFunctionsByUsuario,
  removeFunctionFromUsuario,
  listEscalasByUsuario,
};
