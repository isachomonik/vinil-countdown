// Importando o array de pizzas
const produtos = require('../database/produtos.json');

// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.
const ProdutosController = {

    index: (req, res)=>{

        
        res.render('produtos.ejs', {produtos: produtos});
    },

    show: (req, res)=>{
        // Levantar o id que veio no parâmetro de rota
        let id = req.params.id;
        
        // Encontrar no array de produtos o vinil selecionado
        let produto = produtos.find(produtos=>produtos.id == id);

        // Retornar a view produtos-interno.ejs, com o vinil encontrado
        res.render('produtos-interno.ejs',{vinil: produto});
    }
}

module.exports = ProdutosController;