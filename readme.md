## Pré-requisitos

- Node.js;
- Docker.

## Instalação

- Clonar este repositório;
- Configurar variáveis de ambiente (criar arquivo `.env`);
- No diretório do repositório clonado:
  - Rodar o comando `npm install` para instalar as dependências;
  - Rodar o comando `docker-compose up -d` para criar o banco de dados;
  - Rodar o comando `npm run start:dev` para subir a API.

## Autenticação

Todas as rotas da aplicação necessitam de autenticação, que é feita por meio de Basic Auth.

Para acessar as rotas é necessário ser um usuário cadastrado na aplicação ou ser um usuário administrador (credenciais `SUPERUSER_USER` e `SUPERUSER_PASS`, do arquivo `.env`).

## Rotas

A pasta `/docs` contém uma _collection_ do Postman, com as rotas da aplicação divididas em 4 grupos:

- Usuários;
- Funcões;
- Músicas;
- Escalas.

## Rotas de Usuários

### Autenticação e Autorização

Rotas acessíveis apenas para usuário administrador:

- Criar
- Deletar
- Adicionar Função
- Remover Função

As rotas "Atualizar" e "Listar Escalas" podem ser acessadas apenas pelo usuário administrador e pelo próprio usuário cadastrado.

---

### CRUD

##### Campos para Criação de Usuário

- `nome: string`
- `email: string`
- `senha: string`
- `telefone: string` (opcional)

##### Campos para Atualização de Usuário

- `nome: string` (opcional)
- `email: string` (opcional)
- `senha: string` (opcional)
- `telefone: string` (opcional)

---

### Parâmetros para filtragem

A rota "Listar Escalas" pode receber os seguintes parâmetros como _query params_ para filtrar os resultados:

- `dataInicio` (formato AAAA-MM-DD)
- `dataFim` (formato AAAA-MM-DD)
- `ordem` ("ASC" ou "DESC")

## Rotas de Funções

### Autenticação e Autorização

Rotas acessíveis apenas para usuário administrador:

- Criar
- Deletar
- Atualizar

---

### CRUD

##### Campos para Criação de Função

- `nome: string`
- `descricao: string` (opcional)

##### Campos para Atualização de Função

- `nome: string` (opcional)
- `descricao: string` (opcional)

## Rotas de Músicas

### Autenticação e Autorização

Rotas acessíveis apenas para usuário administrador:

- Criar
- Deletar
- Atualizar
- Listar Escalas

---

### CRUD

##### Campos para Criação de Música

- `nome: string`
- `autor: string` (opcional)
- `tema: string` (opcional)
- `tonalidade: string` (opcional)

##### Campos para Atualização de Música

- `nome: string` (opcional)
- `autor: string` (opcional)
- `tema: string` (opcional)
- `tonalidade: string` (opcional)

---

### Parâmetros para filtragem

A rota "Listar" pode receber os seguintes parâmetros como _query params_ para filtrar os resultados:

- `nome`
- `autor`
- `tema`
- `tonalidade`

A rota "Listar Escalas" pode receber os seguintes parâmetros como _query params_ para filtrar os resultados:

- `dataInicio` (formato AAAA-MM-DD)
- `dataFim` (formato AAAA-MM-DD)
- `ordem` ("ASC" ou "DESC")

## Rotas de Escalas

### Autenticação e Autorização

Rotas acessíveis apenas para usuário administrador:

- Criar
- Deletar
- Atualizar
- Adicionar Usuário
- Remover Usuário
- Adicionar Música
- Remover Música

---

### CRUD

##### Campos para Criação de Escala

- `data: string` (formato AAAA-MM-DD)
- `descricao: string` (opcional)

##### Campos para Atualização de Escala

- `data: string` (opcional) (formato AAAA-MM-DD)
- `descricao: string` (opcional)

---

### Parâmetros para filtragem

A rota "Listar" pode receber os seguintes parâmetros como _query params_ para filtrar os resultados:

- `dataInicio` (formato AAAA-MM-DD)
- `dataFim` (formato AAAA-MM-DD)
- `ordem` ("ASC" ou "DESC")
