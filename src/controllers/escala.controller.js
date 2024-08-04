// Services
import EscalaService from "../services/escala.service.js";

async function createEscala(req, res, next) {
  const escala = req.body;

  try {
    res.send(await EscalaService.createEscala(escala));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listEscalas(req, res, next) {
  const filterParams = req.query;

  try {
    res.send(await EscalaService.listEscalas(filterParams));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function getEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    res.send(await EscalaService.getEscala(escalaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
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
    res.send(await EscalaService.updateEscala(escalaId, escala));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function addUsuarioToEscala(req, res, next) {
  const { escalaId, usuarioId } = req.params;

  try {
    res.send(await EscalaService.addUsuarioToEscala(escalaId, usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function listUsuariosByEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    res.send(await EscalaService.listUsuariosByEscala(escalaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function removeUsuarioFromEscala(req, res, next) {
  const { escalaId, usuarioId } = req.params;

  try {
    res.send(await EscalaService.removeUsuarioFromEscala(escalaId, usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function addMusicaToEscala(req, res, next) {
  const { escalaId, musicaId } = req.params;

  try {
    res.send(await EscalaService.addMusicaToEscala(escalaId, musicaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function listMusicasByEscala(req, res, next) {
  const { escalaId } = req.params;

  try {
    res.send(await EscalaService.listMusicasByEscala(escalaId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function removeMusicaFromEscala(req, res, next) {
  const { escalaId, musicaId } = req.params;

  try {
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
