![Node.js](https://img.shields.io/badge/node.js-20.x-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-blue?style=flat)
![Swagger](https://img.shields.io/badge/swagger-openapi-85EA2D?style=flat&logo=swagger&logoColor=black)
![Tests](https://img.shields.io/badge/tests-automated-success?style=flat)
![SQLite](https://img.shields.io/badge/sqlite-database-003B57?style=flat&logo=sqlite&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/Mariano-JR/Node-Backend-Study?style=flat)

# Node Backend Study

## 📝 Descrição

Projeto de API RESTful desenvolvida em Node.js e TypeScript, aplicando boas práticas de desenvolvimento e focada em qualidade de código.

## 🛠 Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript no servidor.
- TypeScript: Superset do JavaScript para maior segurança de tipo.
- Express: Framework web minimalista e flexível.
- Zod: Validação de dados com segurança de tipo.
- Vitest: Framework de testes unitários.
- Supertest: Testes de integração da API.

## 📁 Estrutura do Projeto (atual)

```
src/
├── controllers/
├── use-cases/
├── repositories/
├── dtos/
├── middlewares/
├── errors/
├── enums/
├── types/
├── routes/
├── docs/
├── app.ts
└── server.ts

tests/
```

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
  npm install
```

### 2. Rodar em ambiente de desenvolvimento

```bash
  npm run dev
```

O servidor será iniciado em:

```bash
  http://localhost:3000
```

## 📚 Documentação da API (Swagger)

A documentação interativa da API está disponível através do Swagger. Para acessá-la, siga os passos abaixo:

### 1. Inicie o servidor localmente com o comando:

```bash
  npm run dev
```

### 2. Acesse a documentação no navegador em:

```bash
  http://localhost:3000/api-docs
```

### 3. Explore os endpoints e teste as funcionalidades da API de forma interativa.

![Print Documentação Swagger](https://private-user-images.githubusercontent.com/104729357/539437196-3bcb49b8-8989-4237-b5a3-9fa2e4d43e2f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjkxMTc5NjUsIm5iZiI6MTc2OTExNzY2NSwicGF0aCI6Ii8xMDQ3MjkzNTcvNTM5NDM3MTk2LTNiY2I0OWI4LTg5ODktNDIzNy1iNWEzLTlmYTJlNGQ0M2UyZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDEyMlQyMTM0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOTIzZmQzZDhlNDllYzFlOWUxMGFjOWViYjM5ZTliNmEwZTE0MDE0MDZkZmIzZGZlYzg3ZmQ5NWQ1NzBlYzg2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NL-qmgcdUHJjfmE5jSSyi2c9uPp4mvnW1LtzErZgufw)

### Versionamento

Atualmente, a API está versionada em `/v1`, permitindo a evolução futura sem quebra de contratos.

## 🧪 Testes Automatizados

- **Vitest**: Utilizado para testes unitários.
- **Supertest**: Utilizado para testes de integração da API.

### Executar os testes:

```bash
npm run test
```

## ⭐ Destaques Técnicos

- Arquitetura baseada em responsabilidades (Controllers, Use Cases e Repositories).
- Validação de dados com Zod aplicada via middleware.
- Tratamento de erros centralizado com middleware global.
- Criação de erros customizados com classe `AppError`.
- Padronização de mensagens de erro utilizando Enums.
- Testes automatizados de API com Vitest e Supertest.
- Isolamento de regras de negócio em Use Cases.
- Código orientado à legibilidade, organização e boas práticas.
