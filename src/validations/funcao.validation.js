// Utils
import { errorHandler } from "../utils/error-handler.js";

export const funcaoCreateValidation = ({ nome, descricao }) => {
  const errors = [];

  if (!nome) {
    errors.push("Nome é obrigatório");
  } else {
    if (typeof nome !== "string") {
      errors.push("Nome precisa ser do tipo string");
    }
  }

  if (descricao && typeof descricao !== "string") {
    errors.push("Descrição precisa ser do tipo string");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};

export const funcaoUpdateValidation = ({ nome, descricao }) => {
  const errors = [];

  if (nome && typeof nome !== "string") {
    errors.push("Nome precisa ser do tipo string");
  }

  if (descricao && typeof descricao !== "string") {
    errors.push("Descrição precisa ser do tipo string");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};
