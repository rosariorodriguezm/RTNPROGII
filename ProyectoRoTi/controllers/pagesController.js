let db = require('../database/models');

let controlador = {

    // aca adentro van los metodos

    home: function (req,res) {
        res.render('home')
    },
    
    avanzado: function (req,res) {
        res.render('avanzado')
    },

    detalle: function (req,res) {
        res.render('detalle')
    },

    favoritos: function (req,res) {
        res.render('favoritos')
    },

    generos :function (req,res) {
        res.render('generos')
    },

    perfil: function (req,res) {
        res.render('perfil')
    },

    perfil: function(req, res) {
        res.render('perfil-usuario')
    },

    registrarse: function (req,res) {
        res.render('registrarse')
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



module.exports = controlador 