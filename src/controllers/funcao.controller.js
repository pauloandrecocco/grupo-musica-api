// Services
import FuncaoService from "../services/funcao.service.js";

async function createFuncao(req, res, next) {
  const funcao = req.body;

  try {
    res.send(await FuncaoService.createFuncao(funcao));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function listFuncoes(req, res, next) {
  try {
    res.send(await FuncaoService.listFuncoes());
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

async function getFuncao(req, res, next) {
  const { funcaoId } = req.params;

  try {
    res.send(await FuncaoService.getFuncao(funcaoId));
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteFuncao(req, res, next) {
  const { funcaoId } = req.params;

  try {
    await FuncaoService.deleteFuncao(funcaoId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id | Success`);
  } catch (err) {
    next(err);
  }
}

async function updateFuncao(req, res, next) {
  const { funcaoId } = req.params;
  const funcao = req.body;

  try {
    res.send(await FuncaoService.updateFuncao(funcaoId, funcao));
    logger.info(`${req.method} ${req.baseUrl} | Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createFuncao,
  listFuncoes,
  getFuncao,
  deleteFuncao,
  updateFuncao,
};
