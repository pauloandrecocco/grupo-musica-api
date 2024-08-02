import express from "express";

// Controllers
import EscalaController from "../controllers/escala.controller.js";

// Middlewares
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", adminAuthMiddleware, EscalaController.createEscala);
router.get("/", userAuthMiddleware, EscalaController.listEscalas);
router.get("/:escalaId", userAuthMiddleware, EscalaController.getEscala);
router.delete("/:escalaId", adminAuthMiddleware, EscalaController.deleteEscala);
router.put("/:escalaId", adminAuthMiddleware, EscalaController.updateEscala);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
