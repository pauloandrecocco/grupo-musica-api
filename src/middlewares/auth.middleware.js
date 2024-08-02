// Services
import UsuarioService from "../services/usuario.service.js";

// Utils
import { getCredentialsFromAuthHeader, isSuperuser } from "../utils/auth.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.indexOf("Basic ") === -1) {
    return res.status(401).json({ message: "Missing Authorization Header" });
  }

  const { username, password } = getCredentialsFromAuthHeader(authHeader);

  if (!username || !password) {
    return res
      .status(401)
      .json({ message: "Invalid Authentication Credentials" });
  }

  if (isSuperuser(username, password)) {
    req.userRole = "superuser";
    return next();
  }

  const usuario = await UsuarioService.getUsuarioByEmail(username);
  if (usuario && username === usuario.email && password === usuario.senha) {
    req.userRole = "user";
    req.user = usuario;

    return next();
  }

  return res
    .status(401)
    .json({ message: "Invalid Authentication Credentials" });
};
