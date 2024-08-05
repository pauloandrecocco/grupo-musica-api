// Validations
import { commonRegex } from "./common.validation.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

export const usuarioCreateValidation = ({ nome, email, senha, telefone }) => {
  const errors = [];

  if (!nome) {
    errors.push("Nome é obrigatório");
  } else {
    if (typeof nome !== "string") {
      errors.push("Nome precisa ser do tipo string");
    }
  }

  if (!email) {
    errors.push("Email é obrigatório");
  } else {
    if (!commonRegex.email.test(email)) {
      errors.push("Email precisa ser válido");
    }
  }

  if (!senha) {
    errors.push("Senha é obrigatório");
  } else {
    if (typeof senha !== "string") {
      errors.push("Senha precisa ser do tipo string");
    }
  }

  if (telefone) {
    if (typeof telefone !== "string") {
      errors.push("Telefone precisa ser do tipo string");
    } else {
      if (!commonRegex.telefone.test(telefone)) {
        errors.push("Telefone precisa ser válido");
      }
    }
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};

export const usuarioUpdateValidation = ({ nome, email, senha, telefone }) => {
  const errors = [];

  if (nome) {
    if (typeof nome !== "string") {
      errors.push("Nome precisa ser do tipo string");
    }
  }

  if (email) {
    if (!commonRegex.email.test(email)) {
      errors.push("Email precisa ser válido");
    }
  }

  if (senha) {
    if (typeof senha !== "string") {
      errors.push("Senha precisa ser do tipo string");
    }
  }

  if (telefone) {
    if (typeof telefone !== "string") {
      errors.push("Telefone precisa ser do tipo string");
    } else {
      if (!commonRegex.telefone.test(telefone)) {
        errors.push("Telefone precisa ser válido");
      }
    }
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};
