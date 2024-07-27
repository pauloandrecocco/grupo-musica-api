// Repositories
import MusicaRepository from "../repositories/musica.repository.js";

async function createMusica(musica) {
  return await MusicaRepository.insertMusica(musica);
}

async function listMusicas() {
  return await MusicaRepository.listMusicas();
}

async function getMusica(musicaId) {
  return await MusicaRepository.getMusica(musicaId);
}

async function deleteMusica(musicaId) {
  await MusicaRepository.deleteMusica(musicaId);
}

async function updateMusica(musicaId, musica) {
  return await MusicaRepository.updateMusica(musicaId, musica);
}

export default {
  createMusica,
  listMusicas,
  getMusica,
  deleteMusica,
  updateMusica,
};
