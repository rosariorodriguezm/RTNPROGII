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
                reseniaSerie: resenas
               
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
        
        moduloLogin.validar(req.body.email, req.body.contrasenia) // para validar que el usuario exista 
        
        .then (function (usuario){
         if (usuario == undefined) { res.send("Hola!")
        } else {
            db.Resenas.create ({
                email: req.body.email,
                texto_res: req.body.texto,
                puntaje: req.body.puntaje, })

             res.redirect("/pages")
        } 

         
    
        
          }) 
        
        },

}


//console.log(idSerie);


