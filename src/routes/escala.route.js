import express from "express";

// Controllers
import EscalaController from "../controllers/escala.controller.js";

const router = express.Router();

router.post("/", EscalaController.createEscala);
router.get("/", EscalaController.listEscalas);
router.get("/:escalaId", EscalaController.getEscala);
router.delete("/:escalaId", EscalaController.deleteEscala);
router.put("/:escalaId", EscalaController.updateEscala);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
