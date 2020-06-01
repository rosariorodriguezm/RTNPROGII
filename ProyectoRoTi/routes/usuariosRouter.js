const express = require('express')
const router = express.Router();

const controller = require('../controllers/usuariosController')


//localhost:3000/usuarios   BUSCADOR DE USUARIOS
router.get('/', controller.buscarUsuarios);

// RESULTADOS DEL BUSCADOR DE USUARIOS
router.post('/respuesta-usuarios', controller.resUsuario)

//INICIAR SESION
router.get('/perfil', controller.perfil)

//UNA VEZ INICIADA SESION TE MUESTRA TU PERFIL PRIVADO
router.get('/miPerfil', controller.miPerfil)

// PERFIL PUBLICO DE TODOS LOS USUARIOS
router.get('/perfil-usuario/:id', controller.perfilUsuario);

// FORM PARA REGISTRATE
router.get('/registrarse', controller.registrarse);

// UNA VEZ REGISTRADO TE LLEVA A X 
router.post('/registrarse', controller.guardarUsuario);


router.get('/favoritos', controller.favoritos);



module.exports = router;