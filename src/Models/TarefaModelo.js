
// Define a estrutura (formato) dos dados da tarefa

const createTask = (id, title) => {
  return {
    id,
    title,
    completed: false,
    createdAt: new Date().toISOString()
  };
};

module.exports = { createTask };
