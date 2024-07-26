import express from "express";

// Controllers
import FuncaoController from "../controllers/funcao.controller.js";

const router = express.Router();

router.post("/", FuncaoController.createFuncao);
router.get("/", FuncaoController.listFuncoes);
router.get("/:funcaoId", FuncaoController.getFuncao);
router.delete("/:funcaoId", FuncaoController.deleteFuncao);
router.put("/:funcaoId", FuncaoController.updateFuncao);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} | ${err.message}`);
});

export default router;
