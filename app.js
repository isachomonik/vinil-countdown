 // 1. Requizicao do modulo NPM Express
//Express: Otimizar a construção de aplicações web e APIs, 
//tornando-se um dos Frameworks mais populares da internet e 
//que utiliza o Node para execução do javascript como linguagem de back-end
var express = require('express');

// 2 Config. Modulo express para chamar como função
var app = express();

//3 Setando o motor de visualizacao como extensao EJS
app.set("view engine", 'ejs');

// 4. Configurando para uso como pasta estatica a public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



// Receberá as informaçes do formulário e deixara disponivel como um objeto literal
//Isso fará com que o processamento das informacoes enviadas via formulário pelo método 
//POST funcione dentro de um objeto literal, assim dando a possibilidade de trabalhar com 
//esses dados, caso nao possua essas duas linhas de código nao ira funcionar.
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Os métodos CRUD, PUT e DELETE nao sao suportados nativamente por todos os navegadores
//As duas linhas de código abaixo chama o módulo para substituir o metodo POST por PUT ou DELETE,
// nos formulários, fazendo com que consigamos trabalhar com métodos citados.
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


//.................................................................................
//.................................................................................

//BLOCO PARA USO DE ROTAS DO PROJETO (REQUISICAO ROTEADOR E INDICACAO CAMINHO)

// Router Index
const indexRouter = require('./routers/indexRouter');
app.use('/', indexRouter);

// Router Produtos
const produtosRouter = require('./routers/produtosRouter');
app.use('/produtos', produtosRouter);

// Router Contato
const contatoRouter = require('./routers/contatoRouter');
app.use('/contato', contatoRouter);

// Router Sobre Nós
const sobreNosRouter = require('./routers/sobreNosRouter');
app.use('/sobre_nos', sobreNosRouter);

// Router Carrinho
const carrinhoRouter = require('./routers/carrinhoRouter');
app.use('/carrinho', carrinhoRouter);

// Router Minha Conta
const minhaContaRouter = require('./routers/minhaContaRouter');
app.use('/minha_conta', minhaContaRouter);

const loginRouter = require('./routers/loginRouter');
app.use('/login', loginRouter);

const pedidoConfRouter = require('./routers/pedidoConfRouter');
app.use('/pedido_confirmado', pedidoConfRouter)


//.................................................................................
//.................................................................................


// Caso não seja encontrado nenhuma das páginas acima, aplicar
//redirecionamento para erro 404
app.use((req, res, next) => {
    res.status(404).render('not-found');
});

///5. Configurando porta para inicializacao do servidor (Running 3000)
app.listen(3000, ()=>console.log('Server running on port 3000'))