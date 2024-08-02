import express from "express";

// Controllers
import EscalaController from "../controllers/escala.controller.js";

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, EscalaController.createEscala);
router.get("/", authMiddleware, EscalaController.listEscalas);
router.get("/:escalaId", authMiddleware, EscalaController.getEscala);
router.delete("/:escalaId", authMiddleware, EscalaController.deleteEscala);
router.put("/:escalaId", authMiddleware, EscalaController.updateEscala);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
