const db = require('../database/models');
const OP = db.Sequelize.Op //requiero operadores de sequelize



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

}


//console.log(idSerie);


