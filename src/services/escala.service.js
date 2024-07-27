// Repositories
import EscalaRepository from "../repositories/escala.repository.js";

async function createEscala(escala) {
  return await EscalaRepository.insertEscala(escala);
}

async function listEscalas() {
  return await EscalaRepository.listEscalas();
}

async function getEscala(escalaId) {
  return await EscalaRepository.getEscala(escalaId);
}

async function deleteEscala(escalaId) {
  await EscalaRepository.deleteEscala(escalaId);
}

async function updateEscala(escalaId, escala) {
  return await EscalaRepository.updateEscala(escalaId, escala);
}

export default {
  createEscala,
  listEscalas,
  getEscala,
  deleteEscala,
  updateEscala,
};
