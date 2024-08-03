// Services
import UsuarioService from "../services/usuario.service.js";

// Utils
import { validateCredentials, areSuperuserCredentials } from "../utils/auth.js";
import { comparePassword } from "../utils/password.js";

export const adminAuthMiddleware = async (req, res, next) => {
  const { username, password, errorMessage } = validateCredentials(
    req.headers.authorization
  );

  if (errorMessage) {
    return res.status(401).json({ error: errorMessage });
  }

  if (areSuperuserCredentials(username, password)) {
    req.user = "superuser";
    return next();
  }

  return res.status(401).json({ error: "Invalid Authentication Credentials" });
};

export const userAuthMiddleware = async (req, res, next) => {
  const { username, password, errorMessage } = validateCredentials(
    req.headers.authorization
  );

  if (errorMessage) {
    return res.status(401).json({ error: errorMessage });
  }

  if (areSuperuserCredentials(username, password)) {
    req.user = "superuser";
    return next();
  }

  const { senha, ...usuario } =
    (await UsuarioService.getUsuarioByEmail(username)) || {};
  if (username === usuario.email && (await comparePassword(password, senha))) {
    req.user = usuario;
    return next();
  }

  return res.status(401).json({ error: "Invalid Authentication Credentials" });
};
