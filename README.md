
# Node Backend Study

Repositório dedicado ao estudo de **Back-end com Node.js e TypeScript**, focado na construção de uma base sólida antes do uso de ferramentas mais avançadas.

O objetivo deste projeto é registrar a evolução diária dos estudos, seguindo boas práticas de mercado e entendimento real dos fundamentos do Node.js.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
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
│   └── error.middleware.ts
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

### 📅 Dia 01 – Fundamentos do Node.js
- O que é Node.js e como funciona
- Event Loop
- Assincronismo (Promise, async/await)
- Manipulação de arquivos com fs
- Criação de servidor HTTP puro
- Leitura de arquivos JSON
- Retorno de dados via HTTP

Conceitos-chave:
- Non-blocking I/O
- Event-driven architecture
- Separação entre código síncrono e assíncrono

### 📅 Dia 02 – Introdução ao Express com TypeScript
- Por que usar Express
- Criação de API com Express
- Separação de responsabilidades:
    - Routes
    - Controllers
    - Services
- Uso de middlewares
- Criação de endpoints REST
- Uso de parâmetros de rota (req.params)

Endpoints implementados:
- `GET /users` → Retorna todos os usuários
- `GET /users/:id` → Retorna um usuário pelo ID

### 📅 Dia 03 — POST, Validação e Tratamento de Erros
- Criação de recursos com método POST
- Uso do `req.body`
- Validação básica de dados de entrada
- Uso correto de status HTTP:
  - `201 Created`
  - `400 Bad Request`
  - `404 Not Found`
  - `204 No Content`
- Implementação de middleware global de erro
- Fluxo de erros com `next(error)`
- Remoção de dados em memória (array)

Endpoints implementados:
- `POST /users` — Cria um novo usuário
- `DELETE /users/:id` — Remove um usuário pelo ID

Conceitos importantes praticados:
- Controllers não tratam erro 500 diretamente
- Services podem lançar erros
- Middlewares centralizam o tratamento de erros
- Importância do `return` para controle de fluxo HTTP
- Diferença entre lógica de negócio e validação de entrada

### 📅 Dia 04 — Update de Recursos (PUT e PATCH)
- Diferença prática entre `PUT` e `PATCH`
- Atualização parcial de recursos (`PATCH`)
- Substituição completa de recursos (`PUT`)
- Reutilização de services com regras HTTP diferentes
- Consolidação da arquitetura controller → service
- Validação de dados de entrada
- Uso consistente de status HTTP

Endpoints implementados:
- `PATCH /users/:id` — Atualiza parcialmente um usuário
- `PUT /users/:id` — Substitui os dados de um usuário

Status HTTP utilizados:
- `200 OK` — Atualização realizada com sucesso
- `400 Bad Request` — Dados obrigatórios ausentes
- `404 Not Found` — Usuário não encontrado
- `500 Internal Server Error` — Erros de regra de negócio

Conceitos importantes praticados:
- PUT e PATCH compartilham o mesmo service, mas não o mesmo controller
- Controllers são responsáveis pela semântica HTTP
- Services concentram regras de negócio
- Importância do controle de fluxo com `return`
- Atualização de estado em memória (array)

### 📅 Dia 05 — DTOs, Validação e Robustez da API
- Introdução a DTOs (Data Transfer Objects) para padronizar entradas
- Validação de dados com Zod
- Uso de `.parse()` para validação síncrona
- Tratamento global de erros com Error Middleware
- Diferenciação entre:
  - Erros de validação (400)
  - Recurso não encontrado (404)
  - Erros internos (500)
- Refinamento das rotas PUT e PATCH
- Controllers mais limpos e previsíveis

Funcionalidades implementadas:
- Validação automática de payloads em `POST`, `PUT` e `PATCH`
- Mensagens de erro claras para o cliente
- Centralização da lógica de erro no middleware
- Atualização parcial (PATCH) e total (PUT) de usuários

## 🎯 Objetivo do Repositório
- Consolidar fundamentos de back-end
- Criar histórico de aprendizado diário
- Evoluir gradualmente para:
    - Validações
    - Tratamento de erros
    - Persistência em banco de dados
    - Autenticação
    - Boas práticas avançadas

## 📌 Próximos passos
- Introduzir persistência real de dados (SQLite ou PostgreSQL)
- Migrar camada de validação para middlewares dedicados
- Implementar testes automatizados (Jest ou Vitest)
- Adicionar paginação e filtros nas rotas
- Introduzir autenticação (JWT)
- Evoluir para uso de ORM (Prisma)
- Criar documentação com Swagger/OpenAPI
- Preparar versão do projeto para apresentação em entrevistas

## Observação
Este repositório é **exclusivamente educacional**, focado em aprendizado progressivo e entendimento dos conceitos por trás das ferramentas utilizadas.