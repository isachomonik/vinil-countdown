const AuthRouter = require('express').Router();
const AuthController = require('../controllers/AuthController')
AuthRouter.get('/login', AuthController.showEntrar);
AuthRouter.post('/login', AuthController.login);
AuthRouter.post('/add', AuthController.add);

module.exports = AuthRouter;