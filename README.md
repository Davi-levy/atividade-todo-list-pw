# 📝 ATIVIDADE API — Node.js (HTTP + CommonJS)

DAVI LEVY LEMOS SOARES
2º DS MANHÃ 
TURMA A

> Atividade API PW II — Prof. Marcos Brandão Rios Etec Bento Quirino  
> Nível: **Sênior (MB)** — inclui Júnior + Pleno + Sênior

---

## Descrição do Projeto

API de lista de tarefas construída **sem frameworks**, utilizando apenas:

- Node.js puro
- Módulo nativo `http`
- Sistema de módulos **CommonJS** (`require` / `module.exports`)
- Módulo nativo `fs` para **persistência de dados em arquivo JSON**

---
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
