const db = require('../database/models');


module.exports = {
    perfilUsuario: function(req, res) {
        //muestra el perfil de un usuario
        db.Usuarios
            .findByPk(
                req.params.id
            )
            .then(usuario => {
                return res.render('perfil-usuario', {
                    detalle: usuario, 
                });
            })
            .catch(error => {
                return res.send(error)
            });
        
    },
    
    perfil: function(req, res){
        res.render('perfil')
    },

    buscarUsuarios: (req, res) => {
        //muestra formulario para buscar usuarios y todos los usuarios
        db.Usuarios
        .findAll()
        .then(usuarios => {
            return res.render('buscar-usuarios', {
                listaUsuarios: usuarios
            });
        })
        .catch(error => {
            res.send(error);
        })
    
    },

    registrarse: function (req,res) {
        res.render('registrarse')
    },
    
    favoritos: function (req,res) {
        res.render('favoritos')
    },
}