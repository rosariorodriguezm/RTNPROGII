const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagesController')

//localhost:3000/pages
router.get('/', controller.home);

router.get('/avanzado', controller.avanzado);

router.get('/detalle', controller.detalle);

router.post('/detalle', controller.nuevaResenia)


router.get('/resultadosBusq', controller.resultadosBusq);

router.get('/series-por-genero', controller.seriesPorGenero);



module.exports = router;