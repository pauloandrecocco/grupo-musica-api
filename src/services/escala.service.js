// Services
import UsuarioService from "./usuario.service.js";

// Repositories
import EscalaRepository from "../repositories/escala.repository.js";

// Utils
import {
  escalaReturnDTO,
  escalasReturnDTO,
  usuariosReturnDTO,
} from "../utils/dto.js";

async function createEscala(escala) {
  return escalaReturnDTO(await EscalaRepository.insertEscala(escala));
}

async function listEscalas() {
  return escalasReturnDTO(await EscalaRepository.listEscalas());
}

async function getEscala(escalaId, withDTO = true) {
  const escala = await EscalaRepository.getEscala(escalaId);
  return withDTO ? escalaReturnDTO(escala) : escala;
}

async function deleteEscala(escalaId) {
  await EscalaRepository.deleteEscala(escalaId);
}

async function updateEscala(escalaId, escala) {
  return escalaReturnDTO(await EscalaRepository.updateEscala(escalaId, escala));
}

async function addUsuarioToEscala(escalaId, usuarioId) {
  const escala = await getEscala(escalaId, false);
  const usuario = await UsuarioService.getUsuario(usuarioId, false);
  await escala.addUsuarios([usuario]);

  return getEscala(escalaId);
}

async function listUsuariosByEscala(escalaId) {
  const escala = await getEscala(escalaId, false);
  const usuarios = await escala.getUsuarios();

  return usuariosReturnDTO(usuarios);
}

async function removeUsuarioFromEscala(escalaId, usuarioId) {
  const escala = await getEscala(escalaId, false);
  const usuario = await UsuarioService.getUsuario(usuarioId, false);
  await escala.removeUsuarios([usuario]);

  return getEscala(escalaId);
}

export default {
  createEscala,
  listEscalas,
  getEscala,
  deleteEscala,
  updateEscala,
  addUsuarioToEscala,
  listUsuariosByEscala,
  removeUsuarioFromEscala,
};
