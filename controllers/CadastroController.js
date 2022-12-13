// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const CadastroController = {

    index: (req, res)=>{
        res.render('cadastro.ejs');
    }
}

module.exports = CadastroController;