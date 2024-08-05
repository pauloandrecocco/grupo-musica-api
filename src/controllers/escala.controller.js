// Services
import EscalaService from "../services/escala.service.js";

// Validations
import {
  filterParamsValidation,
  uuidsValidation,
} from "../validations/common.validation.js";
import {
  escalaCreateValidation,
  escalaUpdateValidation,
} from "../validations/escala.validation.js";

async function createEscala(req, res, next) {
  const escala = req.body;

  try {
    escalaCreateValidation(escala);

    res.send(await EscalaService.createEscala(escala));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listEscalas(req, res, next) {
  const filterParams = req.query;

  try {
    filterParamsValidation(filterParams);

    res.send(await EscalaService.listEscalas(filterParams));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function getEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    uuidsValidation({ escalaId });

    res.send(await EscalaService.getEscala(escalaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    uuidsValidation({ escalaId });

    await EscalaService.deleteEscala(escalaId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function updateEscala(req, res, next) {
  const { escalaId } = req.params;
  const escala = req.body;

  try {
    uuidsValidation({ escalaId });
    escalaUpdateValidation(escala);

    res.send(await EscalaService.updateEscala(escalaId, escala));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function addUsuarioToEscala(req, res, next) {
  const { escalaId, usuarioId } = req.params;

  try {
    uuidsValidation({ escalaId, usuarioId });

    res.send(await EscalaService.addUsuarioToEscala(escalaId, usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function listUsuariosByEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    uuidsValidation({ escalaId });

    res.send(await EscalaService.listUsuariosByEscala(escalaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function removeUsuarioFromEscala(req, res, next) {
  const { escalaId, usuarioId } = req.params;

  try {
    uuidsValidation({ escalaId, usuarioId });

    res.send(await EscalaService.removeUsuarioFromEscala(escalaId, usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function addMusicaToEscala(req, res, next) {
  const { escalaId, musicaId } = req.params;

  try {
    uuidsValidation({ escalaId, musicaId });

    res.send(await EscalaService.addMusicaToEscala(escalaId, musicaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function listMusicasByEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    uuidsValidation({ escalaId });

    res.send(await EscalaService.listMusicasByEscala(escalaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function removeMusicaFromEscala(req, res, next) {
  const { escalaId, musicaId } = req.params;

  try {
    uuidsValidation({ escalaId, musicaId });

    res.send(await EscalaService.removeMusicaFromEscala(escalaId, musicaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
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
  addMusicaToEscala,
  listMusicasByEscala,
  removeMusicaFromEscala,
};
