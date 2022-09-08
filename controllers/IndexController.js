// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const IndexController = {

    index: (req, res)=>{
        res.render('index.ejs');
    }
}

module.exports = IndexController;