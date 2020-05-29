const express = require('express')
const router = express.Router();

const controller = require('../controllers/reseniasController')

//localhost:3000/resenias
router.get('/', controller.index);

router.get('/resenias-recientes', controller.resenasRecientes)



module.exports = router;