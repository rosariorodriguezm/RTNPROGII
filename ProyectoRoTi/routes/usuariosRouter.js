const express = require('express')
const router = express.Router();

const controller = require('../controllers/usuariosController')


//localhost:3000/usuarios
router.get('/', controller.buscarUsuarios);

router.post('/respuesta-usuarios', controller.resUsuario)

router.get('/perfil', controller.perfil)

router.get('/perfil-usuario/:id', controller.perfilUsuario);

router.get('/registrarse', controller.registrarse);

router.post('/registrarse', controller.guardarUsuario);

router.get('/favoritos', controller.favoritos);



module.exports = router;