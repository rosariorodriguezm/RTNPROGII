const db = require('../database/models');
const moduloLogin = require('../modulo-login')


module.exports = {
    perfilUsuario: function(req, res) {
        //muestra el perfil de un usuario
        db.Usuarios
            .findByPk(
                req.params.id,
                {
                    include: ['usuario']
                }
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
    
    resUsuario: (req,res)=> {
        db.Usuarios
                .findAll()
                .then(usuario => {
                    return res.render('respuesta-usuarios',{
                        respuesta: usuario 
                    })
                })
                .catch(function(error){
                    return res.send(error)
                })
                
    }, 
//ESTO SE USA PARA LA CONTRA ENCRIPTADA CUANDO SE CREA UN USUARIO
//  var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.

}