import express from "express";

// Controllers
import MusicaController from "../controllers/musica.controller.js";

// Middlewares
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", adminAuthMiddleware, MusicaController.createMusica);
router.get("/", userAuthMiddleware, MusicaController.listMusicas);
router.get("/:musicaId", userAuthMiddleware, MusicaController.getMusica);
router.delete("/:musicaId", adminAuthMiddleware, MusicaController.deleteMusica);
router.put("/:musicaId", adminAuthMiddleware, MusicaController.updateMusica);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
