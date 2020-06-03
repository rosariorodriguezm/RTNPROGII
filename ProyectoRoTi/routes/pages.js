const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagesController')

//localhost:3000/pages
router.get('/', controller.home);

router.get('/avanzado', controller.avanzado);

router.get('/detalle', controller.detalle);

router.post('/detalle', controller.nuevaResenia)

router.get('/generos', controller.generos);

router.get('/resultadosBusq', controller.resultadosBusq);

router.get('/series-por-genero', controller.seriesPorGenero);

router.get('/series', controller.series);


module.exports = router;