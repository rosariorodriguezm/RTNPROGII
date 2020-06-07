const express = require('express')
const router = express.Router();

const controller = require('../controllers/reseniasController')

//localhost:3000/resenias   TODAS LAS RESENAS
router.get('/', controller.index);

//RESENAS MAS RECIENTES
router.get('/recientes', controller.resenasRecientes)

//RESENAS MEJOR PUNTUADAS
router.get('/mejorPuntuadas', controller.resenasMejorPuntuadas)

//RESENAS PEOR PUNTUADAS
router.get('/peorPuntuadas', controller.resenasPeorPuntuadas)


module.exports = router;