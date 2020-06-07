const db = require('../database/models'); //requerimos los modelos de la carpeta database

module.exports = {
    home: function (req,res) {
        let usuario = req.session.usuario

       //si esta logueado
        if (usuario) {  
            res.render('home', {
            tipo:'usuarioLogueado',
            nombre: usuario.nombre_usuario,
            })

        //si no esta logueado    
        } else { 
            res.render('home', {
            tipo: 'usuarioNoLogueado'
        })
        }

    },
    
    //DETALLE Y RESENAS DE LA SERIE
    detalle: (req,res) => {
        
       db.Resenas
       .findAll ({
           where: [
          { serie_id: req.query.id }
            ],
            include: ['usuario']
            //incluye la relacion 'usuario' entre el modelo de Resenas y Usuarios
        })
            .then(resenas => {
            return res.render('detalle', {
                reseniaSerie: resenas,
                id: req.query.id
               
         }); 
        })
        .catch(error => {
            res.send(error)
        })
        
    },
    
    //PROCESA LA CREACION DE LA NUEVA RESENA
    nuevaResenia: (req, res) => {

    let usuario = req.session.usuario 

    if (usuario) {
             db.Resenas.create ({
                serie_id: req.query.id,
                usuario_id: usuario.id,
                texto_res: req.body.texto_res,
                puntaje: req.body.puntaje,

            })
        res.redirect("/detalle?id="+req.query.id)

        } else {
            res.render('registrarse', {
                error: "true",
                tuError: "Para escribir una reseña debes crear una cuenta"
            })
            } 
    }, 

    resultadosBusq: function (req,res) {
        res.render('resultadosbusq')
    }, 

    avanzado: function (req,res) {
        res.render('avanzado')
    },

    seriesPorGenero: function (req,res) {
        res.render('series-por-genero')
    
    },

    
    

}





