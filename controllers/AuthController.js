const AuthController = {
    showEntrar: (req,res)=> {
        res.render("login.ejs");
    },
    add: () => {
        res.send(req.body);
    },
    login: (req,res) =>{
        res.send(req.body);
    
    }
}
module.exports = AuthController;