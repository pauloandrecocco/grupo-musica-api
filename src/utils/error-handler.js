export function errorHandler(code, message) {
  const error = new Error(message ?? "Erro interno no servidor.");
  error.code = code ?? 500;

  return error;
}
