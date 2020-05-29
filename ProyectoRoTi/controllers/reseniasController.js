const DB = require('../database/models')

module.exports = {
    index: (req, res) => {
      DB.Resenas //Reseñas es el primer parametro que pase en mi modelo
        .findAll() //me traigo todas las reseñas
        .then(resenas => { //cuando este listo, quiero q me devuelva todas las reseñas y ahi la vista de esa pag
          return res.render('todas_resenas', {
            listaResenas: resenas
            //la vista entiende a todas las reseñas como listaReseñas
          })
        })
          .catch(error => {
             res.send(error);
          })
        },

    
        
      
    resenasRecientes: (req, res) => {
        DB.Resenas
        .findAll({
          order: [
            ['created_at', 'DESC']
          ]
        })
        .then(resenas => {
          return res.render('resenas_recientes', {
            ultimasResenas: resenas
          })
        })
        .catch(error => {
          res.send(error);
        })
    }, 
    


}

