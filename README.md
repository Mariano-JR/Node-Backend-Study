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
- Supertest (testes de requisições HTTP)
- ESLint (análise de qualidade de código)
- Prettier (formatação)
- Git & GitHub

---

## 📁 Estrutura do Projeto (atual)

```
src/
├── app.ts                  # Criação da aplicação (Express)
├── server.ts               # Inicialização do servidor
│
├── controllers/
│   └── users.controllers.ts
│
├── use-cases/
│   ├── create-user.usecase.ts
│   ├── get-user.usecase.ts
│   ├── get-users.usecase.ts
│   ├── update-user.usecase.ts
│   ├── delete-user.usecase.ts
│   └── index.ts             # Instâncias compartilhadas dos use cases
│
├── repositories/
│   ├── user.repository.ts
│   └── in-memory-user.repository.ts
│
├── dtos/
│   ├── create-user.service.dto.ts
│   ├── update-user.service.dto.ts
│   └── user-response.dto.ts
│
├── middlewares/
│   ├── error.middleware.ts
│   ├── log.middleware.ts
│   └── validate.middleware.ts
│
├── errors/
│   └── app.error.ts
│
├── enums/
│   └── error-messages.enum.ts
│
├── types/
│   └── user.type.ts
│
└── routes/
    └── users.routes.ts

tests/
└── users.test.ts
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

## 📚 Conteúdo Estudado

- Fundamentos do Node.js e Event Loop
- Programação assíncrona
- Express e criação de APIs REST
- Arquitetura em camadas (controllers, services, routes)
- Middlewares e ciclo de requisição
- Validação de dados com Zod
- DTOs e schemas de validação
- Error handling centralizado
- Criação de erros customizados (`AppError`)
- Padronização de mensagens de erro com Enums
- Operações CRUD
- Testes automatizados de APIs (Vitest + Supertest)
- Boas práticas com TypeScript
- Padronização de código com ESLint

## ⭐ Destaques Técnicos

- Arquitetura em camadas bem definida (Controllers, Services, Routes)
- Validação de dados com Zod aplicada via middleware
- Tratamento de erros centralizado com middleware global
- Criação de erros customizados com classe `AppError`
- Padronização de mensagens de erro utilizando Enums
- Testes automatizados de API com Vitest e Supertest
- ESLint configurado para padronização e qualidade de código
- Código orientado a boas práticas e legibilidade

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

- Introduzir persistência real de dados (SQLite ou PostgreSQL)
- Implementar camada de repositórios
- Introduzir autenticação e autorização (JWT)
- Evoluir testes com cenários mais complexos
- Criar documentação da API com Swagger/OpenAPI
- Aplicar princípios de Clean Architecture
- Preparar versão final para apresentação em entrevistas

## 📘 Anotações de Estudo

As anotações detalhadas sobre os conceitos estudados estão disponíveis no Notion:

👉[Acessar anotações no Notion](https://www.notion.so/mariano-jr/Node-Backend-Study-Notes-2e5bc482362080d1a193ffa3d2c2e47a?source=copy_link)

## 📝 Observação

Este repositório possui caráter educacional e representa minha evolução prática no desenvolvimento back-end com **Node.js** e **TypeScript**, com foco em organização, boas práticas e entendimento dos fundamentos.
