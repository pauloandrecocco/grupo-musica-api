CREATE TABLE usuarios (
usuario_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
email VARCHAR NOT NULL,
senha VARCHAR NOT NULL,
telefone VARCHAR
);

insert into usuarios (nome, email, senha) values ('Admin', 'admin@admin.com', 'admin');