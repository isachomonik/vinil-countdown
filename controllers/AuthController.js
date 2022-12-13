const AuthController = {
    showEntrar: (req,res)=> {
        res.render("login.ejs");
    },
    add: () => {
        res.send(req.body);
    },
    login: (req,res) =>{
        res.render("index.ejs");
    
    }
}
module.exports = AuthController;