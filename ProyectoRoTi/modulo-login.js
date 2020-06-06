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
            },
        })
        .then(results => {
            if (results != null){
                let chequear = bcrypt.compareSync(pass, results.password)
                if (chequear) { //bcrypt == true
                return results;
            } else {
                return undefined
            }
        } else {
            return undefined
        } 
        })
    }
}


module.exports = moduloLogin;