
// tém toda a lógica de negócio

const fs   = require('fs');
const path = require('path');
const { createTask } = require('../Models/TarefaModelo');

const DB_PATH = path.join(__dirname, '../Tarefa.json');


function loadTasks() {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { tasks: [], idCounter: 1 };
  }
}

function saveTasks(data) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}


// Criar tarefa
const addTask = (title) => {
  if (!title || title.trim().length < 3) {
    throw new Error('O título deve ter pelo menos 3 caracteres.');
  }

  const db   = loadTasks();
  const task = createTask(db.idCounter++, title.trim());
  db.tasks.push(task);
  saveTasks(db);
  return task;
};

// Listar todas as tarefas
const getTasks = () => {
  const { tasks } = loadTasks();
  return tasks;
};

// Buscar tarefa por ID  
const getTaskById = (id) => {
  const { tasks } = loadTasks();
  return tasks.find(t => t.id === Number(id)) || null;
};

// Atualizar título e/ou status  
const updateTask = (id, { title, completed }) => {
  const db   = loadTasks();
  const task = db.tasks.find(t => t.id === Number(id));
  if (!task) return null;

  if (title     !== undefined) task.title     = title.trim();
  if (completed !== undefined) task.completed = Boolean(completed);

  saveTasks(db);
  return task;
};

// Deletar tarefa
const deleteTask = (id) => {
  const db    = loadTasks();
  const index = db.tasks.findIndex(t => t.id === Number(id));
  if (index === -1) return false;

  db.tasks.splice(index, 1);
  saveTasks(db);
  return true;
};

module.exports = { addTask, getTasks, getTaskById, updateTask, deleteTask };
