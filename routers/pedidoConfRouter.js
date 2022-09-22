var PedidoConfController = require('../controllers/PedidoConfController');

var express = require('express');

var router = express.Router();

router.get('/', PedidoConfController.index);

module.exports = router;

//teste 