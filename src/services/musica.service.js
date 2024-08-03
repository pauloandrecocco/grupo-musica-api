// Repositories
import MusicaRepository from "../repositories/musica.repository.js";

// Utils
import {
  escalasReturnDTO,
  musicaReturnDTO,
  musicasReturnDTO,
} from "../utils/dto.js";

async function createMusica(musica) {
  return musicaReturnDTO(await MusicaRepository.insertMusica(musica));
}

async function listMusicas({ nome, autor, tema, tonalidade }) {
  const filterParams = {
    ...(nome && { nome }),
    ...(autor && { autor }),
    ...(tema && { tema }),
    ...(tonalidade && { tonalidade }),
  };

  const musicas = await MusicaRepository.listMusicas(filterParams);
  return musicasReturnDTO(musicas);
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

async function listEscalasByMusica(musicaId) {
  const musica = await getMusica(musicaId, false);
  const escalas = await musica.getEscalas();

  return escalasReturnDTO(escalas);
}

export default {
  createMusica,
  listMusicas,
  getMusica,
  deleteMusica,
  updateMusica,
  listEscalasByMusica,
};
