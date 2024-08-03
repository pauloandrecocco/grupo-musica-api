// Repositories
import MusicaRepository from "../repositories/musica.repository.js";

// Utils
import { musicaReturnDTO } from "../utils/dto.js";

async function createMusica(musica) {
  return musicaReturnDTO(await MusicaRepository.insertMusica(musica));
}

async function listMusicas() {
  const musicas = await MusicaRepository.listMusicas();
  return musicas.map((musica) => musicaReturnDTO(musica));
}

async function getMusica(musicaId, withDTO = true) {
  const musica = await MusicaRepository.getMusica(musicaId);
  return withDTO ? musicaReturnDTO(musica) : musica;
}

async function deleteMusica(musicaId) {
  await MusicaRepository.deleteMusica(musicaId);
}

async function updateMusica(musicaId, musica) {
  return musicaReturnDTO(await MusicaRepository.updateMusica(musicaId, musica));
}

export default {
  createMusica,
  listMusicas,
  getMusica,
  deleteMusica,
  updateMusica,
};
