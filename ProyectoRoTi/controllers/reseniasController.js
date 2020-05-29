const DB = require('../database/models')

module.exports = {
    index: (req, res) => {
      res.render('todas_reseñas')
      //DB.Reseñas //Reseñas es el primer parametro que pase en mi modelo
        //.findAll() me traigo todas las reseñas
        //.then(reseñas => { //cuando este listo, quiero q me devuelva todas las reseñas y ahi la vista de esa pag
          //return res.render('todas_reseñas', {
           // listaReseñas: reseñas
            //la vista entiende a todas las reseñas como listaReseñas
         // });
       // })
       // .catch(error => {
        //  return res.send(error);
       // });
        },
      
    resenasRecientes: (req, res) => {
        res.render('resenas_recientes')
    },


}

