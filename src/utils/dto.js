export const usuarioReturnDTO = (usuario) => {
  return {
    usuarioId: usuario.usuarioId,
    nome: usuario.nome,
    email: usuario.email,
    ...(usuario?.telefone ? { telefone: usuario.telefone } : {}),
    ...(usuario?.funcoes ? { funcoes: usuario.funcoes } : {}),
  };
};
