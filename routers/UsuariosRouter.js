const AuthController = require('../controllers/AuthController');
const UsuariosController = require('../controllers/AuthController');

//Criando meu roteador
const UsuariosRouter = require('express').Router();

//Criando as rotas
UsuariosRouter.get('/login', AuthController.showEntrar);
UsuariosRouter.post('/add', AuthController.add); //post recebe o form



//Exportando meu roteador
module.exports = UsuariosRouter;