# 📝 ATIVIDADE API — Node.js (HTTP + CommonJS)

DAVI LEVY LEMOS SOARES
2º DS MANHÃ 
TURMA A

> Atividade API PW II — Prof. Marcos Brandão Rios Etec Bento Quirino  
> Nível: **Sênior (MB)** — inclui Júnior + Pleno + Sênior

---

## Descrição do Projeto

API de lista de tarefas construída **sem frameworks**, utilizando apenas:
---
---

## Endpoints da API

Base URL: `http://localhost:3000`
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
