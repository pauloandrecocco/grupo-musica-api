// Repositories
import UsuarioRepository from "../repositories/usuario.repository.js";

// Utils
import { encryptPassword } from "../utils/password.js";
import { usuarioReturnDTO } from "../utils/dto.js";

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
  return usuarios.map((usuario) => usuarioReturnDTO(usuario));
}

async function getUsuario(usuarioId) {
  const usuario = await UsuarioRepository.getUsuario(usuarioId);
  return usuarioReturnDTO(usuario);
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

export default {
  createUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  getUsuarioByEmail,
};
