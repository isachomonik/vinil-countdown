const UsuariosController = require('../controllers/AuthController');

//Criando meu roteador
const UsuariosRouter = require('express').Router();

//Criando as rotas
UsuariosRouter.get('/login', UsuariosController.showEntrar);
UsuariosRouter.post('/add', UsuariosController.add);



//Exportando meu roteador
module.exports = UsuariosRouter;