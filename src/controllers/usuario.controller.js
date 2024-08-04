// Services
import UsuarioService from "../services/usuario.service.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";
import { isSuperuser, isSameUser } from "../utils/auth.js";

async function createUsuario(req, res, next) {
  const usuario = req.body;

  try {
    res.send(await UsuarioService.createUsuario(usuario));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listUsuarios(req, res, next) {
  try {
    res.send(await UsuarioService.listUsuarios());
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function getUsuario(req, res, next) {
  const { usuarioId } = req.params;

  try {
    res.send(await UsuarioService.getUsuario(usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteUsuario(req, res, next) {
  const { usuarioId } = req.params;

  try {
    await UsuarioService.deleteUsuario(usuarioId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function updateUsuario(req, res, next) {
  const { usuarioId } = req.params;
  const usuario = req.body;
  const reqUsuario = req.user;

  try {
    if (!isSuperuser(reqUsuario) && !isSameUser(reqUsuario, usuarioId)) {
      throw errorHandler(403, "Forbidden User");
    }

    res.send(
      await UsuarioService.updateUsuario(usuarioId, usuario, reqUsuario)
    );
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function addFunctionToUsuario(req, res, next) {
  const { usuarioId, funcaoId } = req.params;

  try {
    res.send(await UsuarioService.addFunctionToUsuario(usuarioId, funcaoId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function listFunctionsByUsuario(req, res, next) {
  const { usuarioId } = req.params;

  try {
    res.send(await UsuarioService.listFunctionsByUsuario(usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function removeFunctionFromUsuario(req, res, next) {
  const { usuarioId, funcaoId } = req.params;

  try {
    res.send(
      await UsuarioService.removeFunctionFromUsuario(usuarioId, funcaoId)
    );
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function listEscalasByUsuario(req, res, next) {
  const { usuarioId } = req.params;
  const reqUsuario = req.user;
  const filterParams = req.query;

  try {
    if (!isSuperuser(reqUsuario) && !isSameUser(reqUsuario, usuarioId)) {
      throw errorHandler(403, "Forbidden User");
    }

    res.send(
      await UsuarioService.listEscalasByUsuario(usuarioId, filterParams)
    );
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createUsuario,
  listUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  addFunctionToUsuario,
  listFunctionsByUsuario,
  removeFunctionFromUsuario,
  listEscalasByUsuario,
};
