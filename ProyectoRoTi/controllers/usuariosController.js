const db = require('../database/models');
const moduloLogin = require('../modulo-login')
const OP = db.Sequelize.Op
const bcrypt = require('bcryptjs')


module.exports = {
    //Muestra formulario para buscar usuarios y todos los usuarios
    buscarUsuarios: (req, res) => {
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

    //Muestra las respuestas del buscador de usuarios
    resUsuario: (req,res)=> {  
        var usuarioBuscado = req.body.usariobuscado; 
          db.Usuarios
               .findAll({    
                   where: {
                       [OP.or]: [
                          { email: {[OP.like]: "%" + usuarioBuscado + "%" } }, 
                           
                            { nombre_usuario: {[OP.like]: "%" + usuarioBuscado + "%" } }
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

    registrarse: function (req,res) {
        res.render('registrarse', {
            error : "false"
        })
    },

    //CREA USUARIO
    guardarUsuario: (req, res) => {
        moduloLogin.buscarPorEmail(req.body.email)

        .then(resultado => {
            //si no hay un usuario que tenga ese mail
            if(resultado == undefined){
            const passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10)

            db.Usuarios.create({
                nombre_usuario: req.body.nombre,
                email: req.body.email,
                fecha_nac: req.body.nacimiento,
                password: passEncriptada,
                genero_fav: req.body.genero, 
                
            })
            res.redirect("/")

            } else {
            // si ya hay un usuario con ese mail
            res.render('registrarse', {
                error:  "true", 
                tuError: "Ya existe una cuenta registrada con el e-mail que ingresaste"} )    
       }
    })
    },

    //  INICIO DE SESION Y PERFIL SI YA ESTA LOGUEADO
    perfil: function(req, res){
        let usuario = req.session.usuario 

        //si ya esta logueado
        if (usuario) {
            res.redirect('/usuarios/miPerfil/'+ usuario.id)

        //si no esta logueado
        } else {
        res.render('perfil', {
            tipo: 'ingresar',
            error: 'false'
        })
        }
    },


    // METODO DE LA RUTA POST DEL LOG IN 
    confirmarUsuario: function(req, res) {
 
        moduloLogin.validar(req.body.email, req.body.contrasenia)
         //tomo del formulario el mail y la contrasenia,
         // el metodo validar del moduloLogin chequea que esten bien
 
         .then(usuario => {
             if(usuario == undefined) {
                 res.render('perfil', {
                   error: 'true', 
                   tipo: 'ingresar'
                 });
                 //si el usuario esta undefined, es decir, no coincide,
                 // me devuelve al form de inicio de sesion    
                 
             } else {
                 req.session.usuario = usuario; //SESSION
                 res.redirect('/usuarios/miPerfil/'+ usuario.id)
             //si el usuario existe, me redirige al perfil de ese usuario 
             
               }
          })
      },

      miPerfil: function(req, res){
        db.Usuarios
        .findByPk(
            req.params.id,
            {
                include: ['resenia']
            }
        )
        .then(usuario => {
            return res.render('miPerfil', {
                detalle: usuario, 
                tipo: 'miPerfil',
            });
        })
        .catch(error => {
            return res.send(error)
        });
        
    },

    eliminarUsuario: (req, res) => {
      //uso formulario del tipo borrar de la vista miPerfil 
        res.render('miPerfil', { 
            tipo: 'borrar', 
            error: 'false',
            id: req.params.id,
        }) 
     
            
    }, 

    usuarioEliminado: (req, res) => {
        moduloLogin.validar(req.body.email, req.body.contrasenia)
        //tomo datos del form

        .then(resultado => {
            if (resultado != null){
                //si el resultado es distinto a undefined, es decir, coincide, elimino la cuenta
                db.Usuarios.destroy({
                    where: { //que coincide con el id que viene como parametro
                        id: req.params.id,
                        }
                    })
                    res.render('registrarse', {
                        error: 'false'
                    }) 
                    req.session.destroy()
                    res.redirect('/usuarios/perfil') 
                    
                    
            } else {
                res.render('miPerfil', {
                    error: 'true',
                    tipo: 'borrar',
                    id: req.params.id,
                })
                } //si no coincide, muestra alerta
            })

    },

    cerrarSesion: function (req, res){
        req.session.destroy()
        res.redirect('/usuarios/perfil') 
        //cuando eliminas tu cuenta te redirige a la pagina de iniciar sesión
    },

    cambiarContrasena: (req, res) => {
        db.Usuarios
        .findOne({ //tomo el usuario que coincida con el id que viene como parametro
            where: [
                {id: req.params.id}
                ]
            })
        .then(result => {
            res.render('editarResenia', {
                result: result,
                tipo: 'editarContra'
                })
            })
    },

    contrasenaCambiada: (req, res) => {
        let usuario = req.session.usuario
       if (usuario) {
    //si esta logueado
        const passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10) 
            
            let actualizarContra = { 
                password: passEncriptada,
                nombre_usuario: usuario.nombre_usuario,
                id: req.params.id,
            } //me traigo los cambios del form junto con el id que viene como parametro
               
            db.Usuarios.update({
            password: actualizarContra.password,
            //actualizo columnas de la db con los nuevos datos
                },{ 
                 where: { //en las que el id del usuario coincide con el id que me traje antes
                    id: actualizarContra.id
                        }
                    })
                .then(()=> {
                    db.Usuarios
                    .findByPk(req.params.id)
                    .then(resultado => {
                        res.redirect('/usuarios/miPerfil/'+ resultado.id)
                        }) //muestro perfil del usuario 
                    })
                } 
    },

    cambiarGenero: function(req,res) {
            let actualizarGenero = {
                genero_fav: req.body.genero,
                id: req.params.id
            }

            db.Usuarios.update({
                genero_fav: actualizarGenero.genero_fav
            },{
                where: {
                    id: actualizarGenero.id
                }
            })
            .then(()=> {
                db.Usuarios
                .findByPk(req.params.id)
                .then(resultado=>{
                    res.redirect('/usuarios/miPerfil/'+ resultado.id)
                } )
            })
    },

    listaMisResenias: function(req,res) {
        db.Resenas
        .findAll({
            where:[
                 {usuario_id: req.params.id}
                ], //de la DB Resenias, me trae todas las resenias
                  // en las que la columna del id de usuario coincida
                  // con el id q viene como parametro
            include:[
                    "usuario" //utilizo la relacion de usuario
                ],
            order: [['updatedAt', 'DESC']]
            })
        .then(resenias => {
            res.render('misResenas', {
                resenias: resenias
                })
            })
    },
 
    editarResenia: function(req, res) {
        db.Resenas
        .findOne({ //tomo la resenia que coincida 
                    //con el id (de una resenia) que viene como parametro
            where: [
                {id: req.params.id}
                ]
            })
        .then(result => {
            res.render('editarResenia', {
                result: result,
                tipo: 'editarResena'
                })
            })
    },

    reseniaEditada: function(req, res){
        
       let usuario = req.session.usuario
       if (usuario) {
        
            let actualizarRes = {
                texto_res: req.body.texto,
                puntaje: req.body.puntaje,
                id: req.params.id
            } //me traigo los cambios del form junto 
              //con el id que viene como parametro
                
            db.Resenas.update({
            texto_res: actualizarRes.texto_res,
            puntaje: actualizarRes.puntaje
            //actualizo columnas de la db con los nuevos datos
                },{ 
                 where: { //en las que el id de la resenia coincide 
                        //con el id que me traje antes
                    id: actualizarRes.id
                        }
                    })
                .then(()=> {
                    db.Resenas
                    .findByPk(req.params.id)
                    .then(resultado => {
                        res.redirect('/usuarios/resenias/'+ resultado.usuario_id)
                        }) //muestro lista de resenias del usuario actualizado
                    })
                } 
            
        },

    borrarResenia: function(req, res) {
        res.render('perfil', { 
            tipo: 'borrar', 
            id: req.params.id
             }) 
            //uso formulario del tipo borrar de la vista perfil
        },

    reseniaBorrada: function(req, res) {
     
        let usuario = req.session.usuario
        if (usuario) {

                db.Resenas.destroy({
                    where: { //que coincide con el id que viene como parametro
                        id: req.params.id,
                        }
                    })
                    res.redirect('/usuarios/resenias/'+ usuario.id) 
                    
            } 
           
    },
    
    perfilUsuario: function(req, res) {
        //muestra el perfil publico de un usuario
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
    
    favoritos: function (req,res) {
        res.render('favoritos')
    },
    


}

