const express = require('express')
const router = express.Router();

const controller = require('../controllers/reseniasController')

//localhost:3000/resenias
router.get('/', controller.index);

router.get('/recientes', controller.resenasRecientes)

router.get('/mejorPuntuadas', controller.resenasMejorPuntuadas)

router.get('/peorPuntuadas', controller.resenasPeorPuntuadas)





module.exports = router;