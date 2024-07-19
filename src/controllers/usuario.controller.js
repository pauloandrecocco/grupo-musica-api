// Services
import UsuarioService from "../services/usuario.service.js";

// Utils
import { validateId } from "../utils/validators.js";

async function createUsuario(req, res, next) {
  const usuario = req.body;

  try {
    // validateUsuario(usuario);

    res.send(await UsuarioService.createUsuario(usuario));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listUsuarios(req, res, next) {
  try {
    res.send(await UsuarioService.listUsuarios());
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getUsuario(req, res, next) {
  const { usuarioId } = req.params;

  try {
    validateId(usuarioId, "usuario");

    res.send(await UsuarioService.getUsuario(usuarioId));
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteUsuario(req, res, next) {
  const { usuarioId } = req.params;

  try {
    validateId(usuarioId, "usuario");

    await UsuarioService.deleteUsuario(usuarioId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateUsuario(req, res, next) {
  const { usuarioId } = req.params;
  const usuario = req.body;

  try {
    validateId(usuarioId, "usuario");

    res.send(await UsuarioService.updateUsuario(usuarioId, usuario));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
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
};
