import express from "express";

// Controllers
import MusicaController from "../controllers/musica.controller.js";

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, MusicaController.createMusica);
router.get("/", authMiddleware, MusicaController.listMusicas);
router.get("/:musicaId", authMiddleware, MusicaController.getMusica);
router.delete("/:musicaId", authMiddleware, MusicaController.deleteMusica);
router.put("/:musicaId", authMiddleware, MusicaController.updateMusica);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
