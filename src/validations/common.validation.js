// Utils
import { errorHandler } from "../utils/error-handler.js";

export const commonRegex = {
  uuid: /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  telefone: /^\d{9,13}$/,
  data: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
};

export const uuidsValidation = (uuidsObject) => {
  const errors = [];

  for (const [uuidKey, uuidValue] of Object.entries(uuidsObject)) {
    if (!commonRegex.uuid.test(uuidValue)) {
      errors.push(`Identificador '${uuidKey}' no formato inválido`);
    }
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};

export const filterParamsValidation = (filterParams) => {
  const errors = [];

  const { dataInicio, dataFim, ordem } = filterParams;

  if (dataInicio && !commonRegex.data.test(dataInicio)) {
    errors.push("Parâmetro 'dataInicio' no formato inválido");
  }

  if (dataFim && !commonRegex.data.test(dataFim)) {
    errors.push("Parâmetro 'dataFim' no formato inválido");
  }

  if (ordem && ordem !== "ASC" && ordem !== "DESC") {
    errors.push("Parâmetro 'order' precisa ser 'ASC' ou 'DESC'");
  }

  if (errors.length > 0) {
    throw errorHandler(400, errors.join("; "));
  }
};
