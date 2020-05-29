const db = require('../database/models');


module.exports = {
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

    perfilUsuario: function(req, res) {
        //muestra el perfil de un usuario
        db.Usuarios
            .findByPk(
                req.params.id
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
    buscarUsuario: (req, res) => {
        //muestra todos los usuarios
        db.Usuarios
        .findAll()
        .then(usuarios => {
            return res.render('buscar-usuarios', {
                listaDeUsuarios: usuarios
            });
        })
        .catch(error => {
            return res.send(error);
        })
    
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



