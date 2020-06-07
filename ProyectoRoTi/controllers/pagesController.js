const db = require('../database/models');
const OP = db.Sequelize.Op //requiero operadores de sequelize
const moduloLogin = require('../modulo-login')


module.exports = {
    home: function (req,res) {
        res.render('home')
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

    generos :function (req,res) {
        res.render('generos')
    },


    resultadosBusq: function (req,res) {
        res.render('resultadosbusq')
    },

    seriesPorGenero: function (req,res) {
        res.render('series-por-genero')
    
    },

    series: function (req,res) {
        res.render('series')
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





