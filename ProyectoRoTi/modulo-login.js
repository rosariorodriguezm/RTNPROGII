let db = require('./database/models')
const bcrypt = require ('bcryptjs')

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.Usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.Usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {

        return db.Usuarios.findOne({
            where:{
                email:email,
                password: pass
            },
        })
        .then(results=>{
          //bcrypt.compare(pass, passEncriptada)
           // .then(function(result) {
               //  result == true   
               return results;
           // });
       // bcrypt.compare(someOtherPlaintextPassword, hash)
          //  .then(function(result) {
                // result == false
            //    res.send("La contraseña es incorrecta")
           // });

         

        })
    }
}


module.exports = moduloLogin;