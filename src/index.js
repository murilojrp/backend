//importar a dependencia do express para a criação do servidor
const express = require('express');
//criar uma constante que representa a nossa aplicação como um todo
//vamos chamar ela de "app" e ela recebe a invocação do express
const app = express();

app.use(express.json());

//MIDDLEWARE
require('./routes')(app);

//define-se em qual porta a aplicação vai rodar
//para isso usamos a função .listen(PORT, CALLBACK FUNCTION)
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});