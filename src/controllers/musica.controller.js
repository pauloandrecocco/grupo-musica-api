// Services
import MusicaService from "../services/musica.service.js";

async function createMusica(req, res, next) {
  const musica = req.body;

  try {
    res.send(await MusicaService.createMusica(musica));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listMusicas(req, res, next) {
  try {
    res.send(await MusicaService.listMusicas());
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function getMusica(req, res, next) {
  const { musicaId } = req.params;

  try {
    res.send(await MusicaService.getMusica(musicaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteMusica(req, res, next) {
  const { musicaId } = req.params;

  try {
    await MusicaService.deleteMusica(musicaId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function updateMusica(req, res, next) {
  const { musicaId } = req.params;
  const musica = req.body;

  try {
    res.send(await MusicaService.updateMusica(musicaId, musica));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createMusica,
  listMusicas,
  getMusica,
  deleteMusica,
  updateMusica,
};
