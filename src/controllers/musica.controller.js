// Services
import MusicaService from "../services/musica.service.js";

// Validations
import {
  filterParamsValidation,
  uuidsValidation,
} from "../validations/common.validation.js";
import {
  musicaCreateValidation,
  musicaUpdateValidation,
} from "../validations/musica.validation.js";

async function createMusica(req, res, next) {
  const musica = req.body;

  try {
    musicaCreateValidation(musica);

    res.send(await MusicaService.createMusica(musica));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listMusicas(req, res, next) {
  const filterParams = req.query;

  try {
    res.send(await MusicaService.listMusicas(filterParams));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function getMusica(req, res, next) {
  const { musicaId } = req.params;

  try {
    uuidsValidation({ musicaId });

    res.send(await MusicaService.getMusica(musicaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteMusica(req, res, next) {
  const { musicaId } = req.params;

  try {
    uuidsValidation({ musicaId });

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
    uuidsValidation({ musicaId });
    musicaUpdateValidation(musica);

    res.send(await MusicaService.updateMusica(musicaId, musica));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listEscalasByMusica(req, res, next) {
  const { musicaId } = req.params;
  const filterParams = req.query;

  try {
    uuidsValidation({ musicaId });
    filterParamsValidation(filterParams);

    res.send(await MusicaService.listEscalasByMusica(musicaId, filterParams));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
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
  listEscalasByMusica,
};
