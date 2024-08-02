// Services
import UsuarioService from "../services/usuario.service.js";

// Utils
import { validateCredentials, isSuperuser } from "../utils/auth.js";

export const authMiddleware = async (req, res, next) => {
  const { username, password, errorMessage } = validateCredentials(
    req.headers.authorization
  );

  if (errorMessage) {
    return res.status(401).json({ message: errorMessage });
  }

  if (isSuperuser(username, password)) {
    req.user = "superuser";
    return next();
  }

  const { senha, ...usuario } =
    (await UsuarioService.getUsuarioByEmail(username)) || {};
  if (username === usuario.email && password === senha) {
    req.user = usuario;
    return next();
  }

  return res
    .status(401)
    .json({ message: "Invalid Authentication Credentials" });
};
