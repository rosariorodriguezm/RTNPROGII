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
        //res.render('detalle')
        
       db.Resenas
       .findAll ({
           where: [
          { serie_id: {[OP.like]: "%" + req.query.id + "%"}}
            ]
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


