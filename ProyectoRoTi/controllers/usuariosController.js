const db = require('../database/models');
const moduloLogin = require('../modulo-login')
const OP = db.Sequelize.Op
const bcrypt = require('bcryptjs')


module.exports = {
    perfilUsuario: function(req, res) {
        //muestra el perfil de un usuario
        db.Usuarios
            .findByPk(
                req.params.id,
                {
                    include: ['resenia']
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

    miPerfil: function(req, res){
        res.render('miPerfil')
        
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

    guardarUsuario: (req, res) => {
   //     res.send(req.body);

       let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10)

        db.Usuarios.create({
            nombre_usuario: req.body.nombre,
            email: req.body.email,
            fecha_nac: req.body.nacimiento,
            password: passEncriptada,
            
        })
        res.redirect("/usuarios")
        
    },
    
    favoritos: function (req,res) {
        res.render('favoritos')
    },
    
    resUsuario: (req,res)=> {  
     //muestra las respuestas del buscador de usuarios
       let busquedaUsuario = req.body.mail //almaceno lo que busca el usuario 

       var variableEmail = req.body.mail;
        var variableNombre = req.body.name; 
       db.Usuarios
            .findAll({    
                where: {
                    [OP.or]: [
                        { email: {[OP.like]: "%" + variableEmail + "%" } }, 
                        { nombre_usuario: {[OP.like]: "%" + variableNombre + "%" } }
                    ]
                }
    })
            .then(usuarios => {
                return res.render("respuesta-usuarios", {
                    listadoUsuarios:usuarios,

                });
            })
            .catch(error => {
                return res.send("error"+error)
            })
                
    }, 





//ESTO SE USA PARA LA CONTRA ENCRIPTADA CUANDO SE CREA UN USUARIO
//  var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.

}


