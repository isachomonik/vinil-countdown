// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.

const SobreNosRouterController = {

    index: (req, res)=>{
        res.render('sobreNos.ejs');
    }
}

module.exports = SobreNosRouterController;