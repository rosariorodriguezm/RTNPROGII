const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagesController')

//localhost:3000
router.get('/', controller.home);

//DETALLE DE LA SERIE
router.get('/detalle', controller.detalle);

//PROCESO Y CREACION DE NUEVA RESENA 
router.post('/detalle', controller.nuevaResenia)


//MUESTRA LOS RESULTADOS DE LA BUSQUEDA 
router.get('/resultadosBusq', controller.resultadosBusq);

//BUSCADOR AVANZADO
router.get('/avanzado', controller.avanzado);

//SERIES POR GENERO
router.get('/series-por-genero', controller.seriesPorGenero);

module.exports = router;
