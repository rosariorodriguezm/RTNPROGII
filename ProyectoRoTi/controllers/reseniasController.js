module.exports = {
    index: (req, res) => {
      res.render('todas_reseñas');
    },

    resenasRecientes: (req, res) => {
        res.render('resenas_recientes')
    },


}

