import express from "express";

// Controllers
import UsuarioController from "../controllers/usuario.controller.js";

const router = express.Router();

router.post("/", UsuarioController.createUsuario);
router.get("/", UsuarioController.listUsuarios);
router.get("/:usuarioId", UsuarioController.getUsuario);
router.delete("/:usuarioId", UsuarioController.deleteUsuario);
router.put("/:usuarioId", UsuarioController.updateUsuario);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
