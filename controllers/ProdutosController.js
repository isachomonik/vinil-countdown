// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const ProdutosController = {

    index: (req, res)=>{
        res.render('produtos.ejs');
    },

    produtosInterno: (req, res)=> {

        res.render('produtos-interno.ejs');
    }
}

module.exports = ProdutosController;