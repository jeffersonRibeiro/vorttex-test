const express = require('express');

const cors = require('cors');

const app = express();

// Porta para subir o servidor
const serverPort = 8001;

// Seta as rotas default da API
const routes = {
  banners: {
    get: '/api/banners',
  },
};

// Aplica o CORS para aceitar requisições de outros domínios
app.use(cors());

// Registra a rota GET default, enviando o JSON como retorno
app.get(routes.banners.get, (req, res) => {
  res.sendFile(__dirname + '/data/banners.json');
});

// app.use('*', (req, res) => {
//   res.redirect(routes.banners.get);
// });

app.use(express.static('public'));

// Inicia o servidor e avisa o usuário
app.listen(serverPort);
console.log(`[banners] API escutando na porta ${serverPort}.`);
