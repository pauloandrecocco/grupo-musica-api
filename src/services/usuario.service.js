// Repositories
import UsuarioRepository from "../repositories/usuario.repository.js";

async function createUsuario(usuario) {
  return await UsuarioRepository.insertUsuario(usuario);
}

async function listUsuarios() {
  return await UsuarioRepository.listUsuarios();
}

async function getUsuario(usuarioId) {
  return await UsuarioRepository.getUsuario(usuarioId);
}

async function deleteUsuario(usuarioId) {
  await UsuarioRepository.deleteUsuario(usuarioId);
}

async function updateUsuario(usuarioId, usuario) {
  return await UsuarioRepository.updateUsuario(usuarioId, usuario);
}

export default {
  createUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
};
