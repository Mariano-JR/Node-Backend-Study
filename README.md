![Node.js](https://img.shields.io/badge/Node.js-24+-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat&logo=express&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1?style=flat)
![REST API](https://img.shields.io/badge/API-RESTful-blue?style=flat)
![Vitest](https://img.shields.io/badge/Vitest-Testing-6E9F18?style=flat&logo=vitest&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-API%20Testing-333333?style=flat)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=flat)

# Node Backend Study

O objetivo deste projeto é consolidar os fundamentos de desenvolvimento back-end com **Node.js**, aplicando boas práticas de mercado e construindo uma base sólida antes do uso de ferramentas mais avançadas.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- Zod (validação de dados)
- Vitest (testes automatizados)
- Supertest (testes de rotas HTTP)
- ESLint
- Prettier
- Git & GitHub

---

## 📁 Estrutura do Projeto (atual)

```
src/
├── controllers/
│   └── users.controllers.ts
├── services/
│   └── users.services.ts
├── routes/
│   └── users.routes.ts
├── middlewares/
│   ├── log.middleware.ts
|   ├── error.middleware.ts
│   └── validate.middleware.ts
├── dtos/
│   ├── create-user.dto.ts
│   └── update-user.dto.ts
├── app.ts
└── server.ts

tests/
└── users.test.ts

users.json
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

## 🧪 Testes Automatizados

O projeto conta com testes automatizados para garantir o correto funcionamento das rotas da API, cobrindo cenários de sucesso e erro.

### Ferramentas utilizadas

- **Vitest**: framework de testes
- **Supertest**: testes de requisições HTTP

### O que é testado

- Listagem de usuários
- Busca por ID
- Criação de usuário
- Atualização parcial (PATCH)
- Substituição completa (PUT)
- Remoção de usuário
- Validações e respostas de erro (400 e 404)

### Executar os testes

```bash
npm run test
```

## 📚 Conteúdo estudado

- Fundamentos do Node.js e Event Loop
- Programação assíncrona
- Express e criação de APIs REST
- Arquitetura em camadas (Controllers, Services, Routes)
- Middlewares e ciclo de requisição
- Middleware de logging
- Error handling centralizado
- DTOs (Data Transfer Objects)
- Validação de dados com Zod
- Middleware genérico de validação (Zod)
- Separação de responsabilidades (Controller x Validação)
- Operações CRUD
- Testes automatizados de APIs
- Testes de integração com Supertest
- Organização de testes por rota e método HTTP
- Boas práticas em testes (isolamento e cenários de erro)
- Boas práticas com TypeScript

## 🧩 Destaques Técnicos

- Arquitetura em camadas (routes, controllers, services e middlewares), promovendo separação de responsabilidades.
- Validação centralizada de dados utilizando Zod, aplicada diretamente nas rotas por meio de middleware genérico reutilizável.
- Tratamento de erros centralizado com middleware dedicado, incluindo integração com erros de validação do Zod.
- Uso correto dos métodos HTTP (GET, POST, PATCH, PUT e DELETE), respeitando semântica REST.
- Diferenciação prática entre PATCH (atualização parcial) e PUT (substituição completa de recurso).
- Código escrito em TypeScript, com tipagem explícita e organização voltada à escalabilidade.
- Estrutura preparada para futura evolução com banco de dados, autenticação e testes automatizados.
- Padronização de código com ESLint e Prettier.
- Scripts para lint, formatação e testes.

## 🎯 Objetivo do Repositório

- Consolidar fundamentos de back-end
- Demonstrar evolução prática em Node.js
- Evoluir gradualmente para:
  - Validações
  - Tratamento de erros
  - Persistência em banco de dados
  - Autenticação
  - Boas práticas avançadas

## 📌 Próximos passos

- Melhorar isolamento dos testes (setup e teardown)
- Introduzir mocks e spies
- Migrar persistência para banco de dados real
- Implementar autenticação (JWT)
- Criar testes para autenticação
- Documentar API com Swagger/OpenAPI

## 📘 Anotações de Estudo

As anotações detalhadas sobre os conceitos estudados estão disponíveis no Notion:

👉[Acessar anotações no Notion](https://www.notion.so/mariano-jr/Node-Backend-Study-Notes-2e5bc482362080d1a193ffa3d2c2e47a?source=copy_link)

## 📝 Observação

Este repositório possui caráter educacional e representa minha evolução prática no desenvolvimento back-end com **Node.js** e **TypeScript**, com foco em organização, boas práticas e entendimento dos fundamentos.
