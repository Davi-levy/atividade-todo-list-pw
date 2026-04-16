
// o HTTP e a lógica de negócio

const taskService = require('../Services/TarefaService');

// ── Helper: lê o body da requisição 
const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end',  ()    => {
      try   { resolve(body ? JSON.parse(body) : {}); }
      catch { reject(new Error('JSON inválido no body.')); }
    });
  });
};

// ── Helper: envia resposta JSON 
const sendJSON = (res, statusCode, data) => {
  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
};


// POST /tasks  Criar tarefa
const createTask = async (req, res) => {
  try {
    const body = await getRequestBody(req);
    const task = taskService.addTask(body.title);
    sendJSON(res, 201, task);
  } catch (err) {
    sendJSON(res, 400, { message: err.message });
  }
};

// GET /tasks  Listar todas as tarefas
const listTasks = (req, res) => {
  const tasks = taskService.getTasks();
  sendJSON(res, 200, tasks);
};

// GET /tasks/:id  Buscar tarefa por ID  
const getTask = (req, res, id) => {
  const task = taskService.getTaskById(id);
  if (!task) return sendJSON(res, 404, { message: 'Tarefa não foi encontrada.' });
  sendJSON(res, 200, task);
};

// PUT /tasks/:id  Atualizar título e/ou status
const updateTask = async (req, res, id) => {
  try {
    const body = await getRequestBody(req);
    const task = taskService.updateTask(id, body);
    if (!task) return sendJSON(res, 404, { message: 'Tarefa não foi encontrada.' });
    sendJSON(res, 200, task);
  } catch (err) {
    sendJSON(res, 400, { message: err.message });
  }
};

// DELETE /tasks/:id  Deletar tarefa
const deleteTask = (req, res, id) => {
  const success = taskService.deleteTask(id);
  if (!success) return sendJSON(res, 404, { message: 'Tarefa não foi encontrada.' });
  sendJSON(res, 200, { message: 'Removida.' });
};

module.exports = { createTask, listTasks, getTask, updateTask, deleteTask };
