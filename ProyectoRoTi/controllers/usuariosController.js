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
        res.render('perfil', {
            tipo: 'ingresar'
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
            });
        })
        .catch(error => {
            return res.send(error)
        });
        
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
    
    resUsuario: (req,res)=> {  
        //muestra las respuestas del buscador de usuarios
   
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
        res.render('registrarse')
    },

    guardarUsuario: (req, res) => {
        moduloLogin.buscarPorEmail(req.body.email)

        .then(resultado => {
            if(resultado == undefined){
            const passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10)

            db.Usuarios.create({
                nombre_usuario: req.body.nombre,
                email: req.body.email,
                fecha_nac: req.body.nacimiento,
                password: passEncriptada,
                
            })
            res.redirect("/pages")
            } else {
            res.send("Ya existe una cuenta registrada con ese email")
            
        }
    })
       
    },
    
    favoritos: function (req,res) {
        res.render('favoritos')
    },
    

        confirmarUsuario: function(req, res) {
            moduloLogin.validar(req.body.email, req.body.contrasenia)
            //tomo del formulario el mail y la contrasenia, el metodo validar del moduloLogin chequea que esten bien

            .then(usuario => {
                if(usuario == undefined) {
                    res.redirect('/usuarios/perfil');
                //si el usuario esta undefined, es decir, no coincide, me devuelve al form de inicio de sesion    
                
                } else {
                    res.redirect('/usuarios/miPerfil/'+ usuario.id)
                //si el usuario existe, me redirige al listado de resenias de ese usuario --> '/usuarios/resenias/:id'
                }
            })
        },

        listaMisResenias: function(req,res) {
            db.Resenas
            .findAll({
                where:[
                    {usuario_id: req.params.id}
                ], //de la DB Resenias, me trae todas las resenias en las que la columna del id de usuario coincida con el id q viene como parametro
                include:[
                    "usuario" //utilizo la relacion de modelos
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
            .findOne({ //tomo la resenia que coincida con el id (de una resenia) que viene como parametro
                where: [
                    {id: req.params.id}
                ]
            })
            .then(result => {
                res.render('editarResenia', {
                    result: result
                })
            })
        },

        reseniaEditada: function(req, res){
            let actualizarRes = {
                texto_res: req.body.texto,
                puntaje: req.body.puntaje,
                id: req.params.id
            } //me traigo los cambios del form junto con el id que viene como parametro

            db.Resenas.update({
                texto_res: actualizarRes.texto_res,
                puntaje: actualizarRes.puntaje
                //actualizo columnas de la db con los nuevos datos
            },{ 
                where: { //en las que el id de la resenia coincide con el id que me traje antes
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
        },

        borrarResenia: function(req, res) {
            res.render('perfil', { 
                tipo: 'borrar', 
                borrarId: req.params.id}) 
            //uso formulario del tipo borrar de la vista perfil
        },

        reseniaBorrada: function(req, res) {
            moduloLogin.validar(req.body.email, req.body.contrasenia)
            //tomo datos del form

            .then(resultado => {
                if (resultado != null){
                   //si el resultado es distinto a undefined, es decir, coincide, elimino la resenia
                    db.Resenas.destroy({
                        where: { //que coincide con el id que viene como parametro
                            id: req.params.id,
                        }
                    })
                    res.redirect('/usuarios/resenias/borrar/'+ req.params.id +'/listo') //redirige a pag intermedia
                    
                } else {
                    res.redirect('/usuarios/resenias/borrar/'+ req.params.id)
                } //si no coincide, redirige al form para borrar resenia
            })

        },


        listoBorrar: function (req, res) {
            return res.render('listo', {
            titulo: '¡La reseña se borró correctamente!',
            volver: 'resenias'

        })
    },

}


