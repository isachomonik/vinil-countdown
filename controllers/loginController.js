// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const loginController = {

    index: (req, res)=>{
        res.render('login.ejs');
    }
}

module.exports = loginController;