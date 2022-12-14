const usuarios = require('../database/usuarios.json')
const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path')
const uniqid = require('uniqid')

const AuthController = {

    showEntrar: (req,res)=> {
        res.render("login.ejs");
    },

    cadastro: (req, res) => {

        let novoUsuario = {
            id: uniqid(),
            nome: req.body.nome,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha, 10),
        }

        usuarios.push(novoUsuario);
        let caminho = path.resolve(__dirname + '/../database/usuarios.json')
        fs.writeFileSync(caminho, JSON.stringify(usuarios, null, 4));

        res.send(req.body);
    },
    
    login: (req,res) =>{
        res.render("index.ejs");
    }
}

module.exports = AuthController;