var express = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/carrinho', CarrinhoController.carrinho);

module.exports = router;
