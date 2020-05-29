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
    perfil: (req, res) => {
        //muestra formulario para buscar usuarios
        db.Usuarios
        .findAll()
        .then(usuarios => {
            return res.render('buscar-usuarios', {
                listaDeUsuarios: usuarios
            });
        })
        .catch(error => {
            return res.send(error);
        })
    
    },

    registrarse: function (req,res) {
        res.render('registrarse')
    },
    
    favoritos: function (req,res) {
        res.render('favoritos')
    },
}