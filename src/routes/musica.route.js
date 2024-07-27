import express from "express";

// Controllers
import MusicaController from "../controllers/musica.controller.js";

const router = express.Router();

router.post("/", MusicaController.createMusica);
router.get("/", MusicaController.listMusicas);
router.get("/:musicaId", MusicaController.getMusica);
router.delete("/:musicaId", MusicaController.deleteMusica);
router.put("/:musicaId", MusicaController.updateMusica);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
