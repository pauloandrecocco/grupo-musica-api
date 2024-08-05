// Utils
import { errorHandler } from "../utils/error-handler.js";

export const musicaCreateValidation = ({ nome, autor, tema, tonalidade }) => {
  const errors = [];

  if (!nome) {
    errors.push("Nome é obrigatório");
  } else {
    if (typeof nome !== "string") {
      errors.push("Nome precisa ser do tipo string");
    }
  }

  if (autor && typeof autor !== "string") {
    errors.push("Autor precisa ser do tipo string");
  }

  if (tema && typeof tema !== "string") {
    errors.push("Tema precisa ser do tipo string");
  }

  if (tonalidade && typeof tonalidade !== "string") {
    errors.push("Tonalidade precisa ser do tipo string");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};

export const musicaUpdateValidation = ({ nome, autor, tema, tonalidade }) => {
  const errors = [];

  if (nome && typeof nome !== "string") {
    errors.push("Nome precisa ser do tipo string");
  }

  if (autor && typeof autor !== "string") {
    errors.push("Autor precisa ser do tipo string");
  }

  if (tema && typeof tema !== "string") {
    errors.push("Tema precisa ser do tipo string");
  }

  if (tonalidade && typeof tonalidade !== "string") {
    errors.push("Tonalidade precisa ser do tipo string");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};
