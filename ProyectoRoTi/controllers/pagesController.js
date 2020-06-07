const db = require('../database/models');
const OP = db.Sequelize.Op //requiero operadores de sequelize
const moduloLogin = require('../modulo-login')


module.exports = {
    home: function (req,res) {
        let usuario = req.session.usuario
        //si esta logueado
        if (usuario) {
            res.render('home', {
            tipo:'usuarioLogueado',
            nombre: usuario.nombre_usuario,
            })
        } else { //si no esta logueado
            res.render('home', {
            tipo: 'usuarioNoLogueado'
        })
        }

    },
    
    avanzado: function (req,res) {
        res.render('avanzado')
    },

    detalle: (req,res) => {
        
       db.Resenas
       .findAll ({
           where: [
          { serie_id: req.query.id }
            ],
            include: ['usuario']
        })
            .then(resenas => {
            return res.render('detalle', {
                reseniaSerie: resenas,
                id: req.query.id
               
         }) ; 
        })
        .catch(error => {
            res.send(error)
        })
        
    },


    resultadosBusq: function (req,res) {
        res.render('resultadosbusq')
    },

    seriesPorGenero: function (req,res) {
        res.render('series-por-genero')
    
    },

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

}





