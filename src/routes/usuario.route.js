import express from "express";

// Controllers
import UsuarioController from "../controllers/usuario.controller.js";

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, UsuarioController.createUsuario);
router.get("/", authMiddleware, UsuarioController.listUsuarios);
router.get("/:usuarioId", authMiddleware, UsuarioController.getUsuario);
router.delete("/:usuarioId", authMiddleware, UsuarioController.deleteUsuario);
router.put("/:usuarioId", authMiddleware, UsuarioController.updateUsuario);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
