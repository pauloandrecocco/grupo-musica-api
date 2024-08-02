import express from "express";

// Controllers
import FuncaoController from "../controllers/funcao.controller.js";

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, FuncaoController.createFuncao);
router.get("/", authMiddleware, FuncaoController.listFuncoes);
router.get("/:funcaoId", authMiddleware, FuncaoController.getFuncao);
router.delete("/:funcaoId", authMiddleware, FuncaoController.deleteFuncao);
router.put("/:funcaoId", authMiddleware, FuncaoController.updateFuncao);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
