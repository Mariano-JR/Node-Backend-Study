![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1?style=flat)
![REST API](https://img.shields.io/badge/API-RESTful-blue?style=flat)
![Layered Architecture](https://img.shields.io/badge/Architecture-Layered-blueviolet?style=flat)
![Clean Code](https://img.shields.io/badge/Clean-Code-success?style=flat)
![Middleware](https://img.shields.io/badge/Middleware-Error%20Handling-important?style=flat)
![Learning](https://img.shields.io/badge/Learning-Backend%20Node.js-orange?style=flat)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=flat)

# Node Backend Study
O objetivo deste projeto é consolidar os fundamentos de desenvolvimento back-end com `Node.js`, aplicando boas práticas de mercado e construindo uma base sólida antes do uso de ferramentas mais avançadas.

---

## 🛠 Tecnologias Utilizadas
- Node.js
- TypeScript
- Express.js
- Zod
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
- Boas práticas com TypeScript

## 🧩 Destaques Técnicos
- Arquitetura em camadas (routes, controllers, services e middlewares), promovendo separação de responsabilidades.
- Validação centralizada de dados utilizando Zod, aplicada diretamente nas rotas por meio de middleware genérico reutilizável.
- Tratamento de erros centralizado com middleware dedicado, incluindo integração com erros de validação do Zod.
- Uso correto dos métodos HTTP (GET, POST, PATCH, PUT e DELETE), respeitando semântica REST.
- Diferenciação prática entre PATCH (atualização parcial) e PUT (substituição completa de recurso).
- Código escrito em TypeScript, com tipagem explícita e organização voltada à escalabilidade.
- Estrutura preparada para futura evolução com banco de dados, autenticação e testes automatizados.

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
- Refatorar services para preparação de integração com banco de dados
- Implementar testes automatizados (Jest ou Vitest)
- Adicionar paginação e filtros nas rotas
- Introduzir autenticação (JWT)
- Evoluir para uso de ORM (Prisma)
- Criar documentação com Swagger/OpenAPI
- Preparar versão do projeto para apresentação em entrevistas

## 📘 Anotações de Estudo
As anotações detalhadas sobre os conceitos estudados estão disponíveis no Notion:

👉[Acessar anotações no Notion](https://www.notion.so/mariano-jr/Node-Backend-Study-Notes-2e5bc482362080d1a193ffa3d2c2e47a?source=copy_link)

## 📝 Observação
Este repositório possui caráter educacional e representa minha evolução prática no desenvolvimento back-end com `Node.js` e `TypeScript`, com foco em organização, boas práticas e entendimento dos fundamentos.