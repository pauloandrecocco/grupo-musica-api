// Repositories
import UsuarioRepository from "../repositories/usuario.repository.js";

// Utils
import { encryptPassword } from "../utils/password.js";

async function createUsuario(usuario) {
  const hashedSenha = await encryptPassword(usuario.senha);

  return await UsuarioRepository.insertUsuario({
    ...usuario,
    senha: hashedSenha,
  });
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
  if (usuario?.senha) {
    usuario.senha = await encryptPassword(usuario.senha);
  }

  return await UsuarioRepository.updateUsuario(usuarioId, usuario);
}

async function getUsuarioByEmail(email) {
  return await UsuarioRepository.getUsuarioByEmail(email);
}

export default {
  createUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  getUsuarioByEmail,
};
