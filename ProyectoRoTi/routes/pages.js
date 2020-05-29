const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagesController')

router.get('/', controller.home);

router.get('/avanzado', controller.avanzado);

router.get('/detalle', controller.detalle);

router.get('/generos', controller.generos);

router.get('/resultadosBusq', controller.resultadosBusq);

router.get('/series-por-genero', controller.seriesPorGenero);

router.get('/series', controller.series);


module.exports = router;