// Usuário
export const usuarioReturnDTO = (usuario) => {
  return {
    usuarioId: usuario.usuarioId,
    nome: usuario.nome,
    email: usuario.email,
    ...(usuario?.telefone && { telefone: usuario.telefone }),
    ...(usuario?.funcoes && { funcoes: funcoesReturnDTO(usuario.funcoes) }),
  };
};

export const usuariosReturnDTO = (usuarios) => {
  return usuarios.map((usuario) => usuarioReturnDTO(usuario));
};

// Função
export const funcaoReturnDTO = (funcao) => {
  return {
    funcaoId: funcao.funcaoId,
    nome: funcao.nome,
    ...(funcao?.descricao && { descricao: funcao.descricao }),
  };
};

export const funcoesReturnDTO = (funcoes) => {
  return funcoes.map((funcao) => funcaoReturnDTO(funcao));
};

// Música
export const musicaReturnDTO = (musica) => {
  return {
    musicaId: musica.musicaId,
    nome: musica.nome,
    ...(musica?.autor && { autor: musica.autor }),
    ...(musica?.tema && { tema: musica.tema }),
    ...(musica?.tonalidade && { tonalidade: musica.tonalidade }),
  };
};

export const musicasReturnDTO = (musicas) => {
  return musicas.map((musica) => musicaReturnDTO(musica));
};

// Escala
export const escalaReturnDTO = (escala) => {
  return {
    escalaId: escala.escalaId,
    data: escala.data,
    ...(escala?.descricao && { descricao: escala.descricao }),
    ...(escala?.musicas && { musicas: musicasReturnDTO(escala.musicas) }),
    ...(escala?.usuarios && { usuarios: usuariosReturnDTO(escala.usuarios) }),
  };
};

export const escalasReturnDTO = (escalas) => {
  return escalas.map((escala) => escalaReturnDTO(escala));
};
