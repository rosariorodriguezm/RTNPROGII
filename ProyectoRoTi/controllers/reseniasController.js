const DB = require('../database/models')
const moduloLogin = require('../modulo-login')

module.exports = {
    index: (req, res) => {
      DB.Resenas //Reseñas es el primer parametro que pase en mi modelo
        .findAll(
          { 
            include: ['usuario']
          }
        ) //me traigo todas las reseñas
        .then(resenas => { //cuando este listo, quiero q me devuelva todas las reseñas y ahi la vista de esa pag
          return res.render('todas_resenas', {
            listaResenas: resenas,
            //la vista entiende a todas las reseñas como listaReseñas
          })
        })
          .catch(error => {
             res.send(error);
          })
        },

      
    resenasRecientes: (req, res) => {
        DB.Resenas
        .findAll(
          {
          include: ['usuario'], order: [['createdAt', 'DESC']]
          //aplico la relacion de los modelos y ordeno ultimas reseñas segun su fecha de creacion en forma descendente 
          }
        )
        .then(resenas => {
          return res.render('resenas_recientes', {
            ultimasResenas: resenas,
            tipo: 'recientes'
          })
        })
        .catch(error => {
          res.send(error);
        })
    }, 

    resenasMejorPuntuadas: (req, res) => {
      DB.Resenas
      .findAll(
        {
        include: ['usuario'], order: [['puntaje', 'DESC']], limit: [10]
        //aplico la relacion de los modelos y ordeno ultimas reseñas segun su puntaje en forma descendente 
        }
      )
      .then(resenas => {
        return res.render('resenas_recientes', {
          ultimasResenas: resenas,
          tipo: 'mejorPuntaje'
        })
      })
      .catch(error => {
        res.send(error);
      })


    },

    resenasPeorPuntuadas: (req, res) => {
      DB.Resenas
      .findAll(
        {
        include: ['usuario'], order: [['puntaje', 'ASC']], limit: [10]
        //aplico la relacion de los modelos y ordeno ultimas reseñas segun su puntaje en forma ascendiente 
        }
      )
      .then(resenas => {
        return res.render('resenas_recientes', {
          ultimasResenas: resenas,
          tipo: 'peorPuntaje'
        })
      })
      .catch(error => {
        res.send(error);
      })


    },


    nuevaResenia: (req, res) => {
    
    moduloLogin.validar(req.body.email, req.body.contrasenia) // para validar que el usuario exista 
//   .then (function (usuario){
//     if (usuario) {
//       const resena = {
//                      serie_id: req.body.serie_id,
//                      usuario_id: usuario_id,
//                      texto_res: req.body.texto_res,
//                      puntaje: req.body.puntaje,
//        }
//        DB.Resenas.create (resena)
//        .then (function (resultado) {
//          res.send("¡Gracias por tu reseña!")
//        })
//      } else {
//          res.send("El mail o la contraseña no es correcta, intentelo nuevamente")
//      }
//      res.redirect("/pages/detalle")  

//    })
     



    
  },
    
}

