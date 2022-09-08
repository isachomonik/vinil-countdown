// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const MinhaContaController = {

    index: (req, res)=>{
        res.render('minhaConta.ejs');
    }
}

module.exports = MinhaContaController;