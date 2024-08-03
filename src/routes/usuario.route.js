import express from "express";

// Controllers
import UsuarioController from "../controllers/usuario.controller.js";

// Middlewares
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", adminAuthMiddleware, UsuarioController.createUsuario);
router.get("/", userAuthMiddleware, UsuarioController.listUsuarios);
router.get("/:usuarioId", userAuthMiddleware, UsuarioController.getUsuario);
router.delete(
  "/:usuarioId",
  adminAuthMiddleware,
  UsuarioController.deleteUsuario
);
router.put("/:usuarioId", userAuthMiddleware, UsuarioController.updateUsuario);

router.post(
  "/:usuarioId/funcoes/:funcaoId",
  adminAuthMiddleware,
  UsuarioController.addFunction
);
router.get(
  "/:usuarioId/funcoes",
  userAuthMiddleware,
  UsuarioController.listFunctions
);
router.delete(
  "/:usuarioId/funcoes/:funcaoId",
  adminAuthMiddleware,
  UsuarioController.removeFunction
);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
