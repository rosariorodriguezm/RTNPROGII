const express = require('express')
const router = express.Router();

const controller = require('../controllers/usuariosController')

//localhost:3000/usuarios
router.get('/', controller.perfil);

router.get('/perfil-usuario', controller.perfilUsuario);

router.get('/perfil-usuario', controller.perfilUsuario);

router.get('/registrarse', controller.registrarse)

router.get('/favoritos', controller.favoritos);



module.exports = router;