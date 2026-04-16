
const http       = require('http');
const taskRoutes = require('./Routes/TarefaRoutes');

const PORT = 3000;

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'application/json');

  taskRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
