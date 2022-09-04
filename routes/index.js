var express = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');
const InternoController = require('../controllers/InternoController');
const ListagemController = require('../controllers/ListagemController');
const LoginController = require('../controllers/LoginController');
const PainelController = require('../controllers/PainelController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/carrinho', CarrinhoController.carrinho);
// router.get('/home', CarrinhoController.carrinho);
router.get('/:id', InternoController.interno);
router.get('/search', ListagemController.listagem);
router.get('/login', LoginController.login);
router.get('/user', PainelController.painel);


module.exports = router;
