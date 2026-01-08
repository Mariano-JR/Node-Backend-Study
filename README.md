
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
├── app.ts
├── server.ts
├── routes/
│ └── users.routes.ts
├── controllers/
│ └── users.controllers.ts
├── services/
│ └── users.services.ts
├── middlewares/
│ └── log.middleware.ts
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

### Dia 01 – Fundamentos do Node.js
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

### Dia 02 – Introdução ao Express com TypeScript
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
- ```GET /users``` → Retorna todos os usuários
- ```GET /users/:id``` → Retorna um usuário pelo ID

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
- ```POST /users```
- Validação de dados
- Middleware global de erros
- Status HTTP adequados
- Evolução da API

## Observação
Este repositório é **exclusivamente educacional**, focado em aprendizado progressivo e entendimento dos conceitos por trás das ferramentas utilizadas.