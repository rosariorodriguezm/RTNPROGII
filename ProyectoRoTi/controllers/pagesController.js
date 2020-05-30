const db = require('../database/models');


module.exports = {
    home: function (req,res) {
        res.render('home')
    },
    
    avanzado: function (req,res) {
        res.render('avanzado')
    },

    detalle: (req,res) => {
        res.render('detalle')
       // db.Resenas
       // .findByPk(
       //     req.params.id
       // )
       // .then(resena => {
        //   return res.render('detalle', {
        //       resenia_serie: resena
        //   })
       // })
       // .catch(error => {
       //     res.send(error)
       // })
            

        
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



