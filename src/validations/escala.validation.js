// Validations
import { commonRegex } from "./common.validation.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

export const escalaCreateValidation = ({ data, descricao }) => {
  const errors = [];

  if (!data) {
    errors.push("Data é obrigatória");
  } else {
    if (!commonRegex.data.test(data)) {
      errors.push("Data no formato inválido");
    }
  }

  if (descricao && typeof descricao !== "string") {
    errors.push("Descricao precisa ser do tipo string");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};

export const escalaUpdateValidation = ({ data, descricao }) => {
  const errors = [];

  if (data && !commonRegex.data.test(data)) {
    errors.push("Data no formato inválido");
  }

  if (descricao && typeof descricao !== "string") {
    errors.push("Descricao precisa ser do tipo string");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};
