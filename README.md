# 📝 ATIVIDADE API — Node.js (HTTP + CommonJS)

DAVI LEVY LEMOS SOARES
2º DS MANHÃ 
TURMA A

> Atividade API PW II — Prof. Marcos Brandão Rios — Etec Bento Quirino  
> Nível: **Sênior (MB)** — inclui Júnior + Pleno + Sênior

---

## Descrição do Projeto

API de lista de tarefas construída **sem frameworks**, utilizando apenas:

- Node.js puro
- Módulo nativo `http`
- Sistema de módulos **CommonJS** (`require` / `module.exports`)
- Módulo nativo `fs` para **persistência de dados em arquivo JSON**

---

## Tecnologias Utilizadas

| Tecnologia | Versão |
|------------|--------|
| Node.js    | 18+    |
| JavaScript | ES2020 |

---

## Estrutura de Pastas

```
to_do_list/
├── data/
│   └── tasks.json              ← banco de dados em arquivo (Nível Sênior)
└── src/
    ├── app.js                  ← servidor HTTP
    ├── controllers/
    │   └── TarefaController.js   ← controla o fluxo das requisições
    ├── models/
    │   └── TarefaModelos.js        ← define a estrutura da tarefa
    ├── routes/
    │   └── TarefaRoutes.js       ← mapeia URLs para controllers
    └── services/
        └── TarefaService.js      ← lógica de negócio + persistência
```

---

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/to_do_list.git

# 2. Entre na pasta
cd to_do_list


## Execução

```bash
node src/app.js
```

O servidor iniciará em: `http://localhost:3000`

---

## Endpoints da API

Base URL: `http://localhost:3000`

| Método | Rota          | Descrição                      |
|--------|---------------|--------------------------------|
| GET    | /tasks        | Listar todas as tarefas        |
| POST   | /tasks        | Criar nova tarefa              |
| GET    | /tasks/:id    | Buscar tarefa por ID           |
| PUT    | /tasks/:id    | Atualizar título e/ou status   |
| DELETE | /tasks/:id    | Deletar tarefa                 |

---

## Exemplos de Uso

### Criar tarefa
```http
POST /tasks
Content-Type: application/json

{ "title": "Estudar Node.js" }
```
Resposta `201`:
```json
{ "id": 1, "title": "Estudar Node.js", "completed": false, "createdAt": "..." }
```

### Listar tarefas
```http
GET /tasks
```

### Buscar por ID
```http
GET /tasks/1
```

### Atualizar título
```http
PUT /tasks/1
Content-Type: application/json

{ "title": "Estudar HTTP no Node" }
```

### Marcar como concluída (Nível Júnior)
```http
PUT /tasks/1
Content-Type: application/json

{ "completed": true }
```

### Deletar
```http
DELETE /tasks/1
```

---

## Explicação da Solução

O projeto segue a separação

- **Routes** — porta de entrada; identifica URL e método HTTP, delega ao controller
- **Controller** — lê o body, chama o service, envia a resposta JSON
- **Service** — lógica de negócio: validações, criação, atualização e deleção
- **Model** — define o formato do objeto tarefa

### Destaques por Nível

**Júnior** — campo `completed` no Model; endpoint PUT aceita `{ completed: true/false }` para alternar o status da tarefa.

**Pleno** — endpoint `GET /tasks/:id` com rota dinâmica manual via `url.split('/')`, retornando 404 caso o ID não exista.

**Sênior** — persistência via módulo nativo `fs`. As funções `loadTasks()` e `saveTasks()` leem e gravam o arquivo `data/tasks.json` a cada operação, garantindo que os dados sobrevivam ao reinício do servidor.

---

## Status Codes Utilizados

| Código | Significado       |
|--------|-------------------|
| 200    | Sucesso           |
| 201    | Criado            |
| 400    | Requisição inválida |
| 404    | Não encontrado    |
