// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const CarrinhoController = {

    index: (req, res)=>{
        res.render('carrinho.ejs');
    }
}

module.exports = CarrinhoController;