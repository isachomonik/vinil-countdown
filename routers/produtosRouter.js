// Bloco para uso de Rotas do projeto (Requisicao Controller e Indicacao Caminho)
var ProdutosController = require('../controllers/ProdutosController');

// 1. Requizicao do modulo NPM Express
var express = require('express');

// 2 Config. Modulo express para chamar a funcao roteador
var router = express.Router();

router.get('/', ProdutosController.index);

// Rota para exibir o produto selecionado na página de produtos
router.get('/:id', ProdutosController.show);

//3. Exportando o Modulo de roteamento para uso nas funcoes de Controller
module.exports = router;