// Repositories
import EscalaRepository from "../repositories/escala.repository.js";

// Utils
import { escalaReturnDTO, escalasReturnDTO } from "../utils/dto.js";

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

export default {
  createEscala,
  listEscalas,
  getEscala,
  deleteEscala,
  updateEscala,
};
