// Camada de Rotas
// Porta de entrada da API: mapeia URLs 
// Não tem lógica de negócio

const taskController = require('../Controllers/TarefaController');

module.exports = (req, res) => {
  const url    = req.url;
  const method = req.method;

  // GET /tasks — listar todas
  if (url === '/tasks' && method === 'GET') {
    return taskController.listTasks(req, res);
  }

  
  if (url === '/tasks' && method === 'POST') {
    return taskController.createTask(req, res);
  }

 
  if (url.startsWith('/tasks/')) {
    const id = url.split('/')[2];

    // GET /tasks/:id — buscar por ID  
    if (method === 'GET') {
      return taskController.getTask(req, res, id);
    }

    // PUT /tasks/:id — atualizar  
    if (method === 'PUT') {
      return taskController.updateTask(req, res, id);
    }

    // DELETE /tasks/:id — deletar
    if (method === 'DELETE') {
      return taskController.deleteTask(req, res, id);
    }
  }

  // Rota não encontrada
  res.statusCode = 404;
  res.end(JSON.stringify({ message: 'Rota não encontrada.' }));
};
