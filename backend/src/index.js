const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
//se fosse pra produção então o cors seria:
// app.use(cors({
//     origin: 'http://meusite.com'
// }));
//Teste
app.use(express.json());
app.use(routes);

app.listen(3333);

