import express from "express";

// Controllers
import FuncaoController from "../controllers/funcao.controller.js";

// Middlewares
import {
  adminAuthMiddleware,
  userAuthMiddleware,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", adminAuthMiddleware, FuncaoController.createFuncao);
router.get("/", userAuthMiddleware, FuncaoController.listFuncoes);
router.get("/:funcaoId", userAuthMiddleware, FuncaoController.getFuncao);
router.delete("/:funcaoId", adminAuthMiddleware, FuncaoController.deleteFuncao);
router.put("/:funcaoId", adminAuthMiddleware, FuncaoController.updateFuncao);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
