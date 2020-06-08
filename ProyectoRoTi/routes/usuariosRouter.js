const express = require('express')
const router = express.Router();

const controller = require('../controllers/usuariosController')


//localhost:3000/usuarios   

                //BUSCADOR

//BUSCADOR DE USUARIOS y LISTA DE TODOS LOS USUARIOS 
router.get('/', controller.buscarUsuarios);

// PROCESO DEL BUSCADOR Y RESULTADOS
router.post('/respuesta-usuarios', controller.resUsuario)


               //REGISTRACION

// FORM PARA REGISTRATE
router.get('/registrarse', controller.registrarse);

// PROCESO DE REGISTRACION Y TE LLEVA AL HOME  
router.post('/registrarse', controller.guardarUsuario);


                //INICIO DE SESION Y MI PERFIL (+ OPCIONES)


//INICIAR SESION
router.get('/perfil', controller.perfil);

//PROCESA EL INICIO DE SESION Y REDIRECCIONA A PAG MI PERFIL 
router.post('/perfil', controller.confirmarUsuario);

//UNA VEZ INICIADA SESION TE MUESTRA TU PERFIL PRIVADO
router.get('/miPerfil/:id', controller.miPerfil)


// FORM PARA ELIMINAR CUENTA
router.get('/miPerfil/borrar/:id', controller.eliminarUsuario);

// PROCESA Y CONFIRMA LA ELIMINACION DE LA CUENTA 
router.post('/miPerfil/borrar/:id', controller.usuarioEliminado);


// PROCESO DE CERRAR SESION
router.post('/cerrarSesion', controller.cerrarSesion);


// CAMBIAR CONTRASEÑA
router.get('/miPerfil/cambiarContrasena/:id', controller.cambiarContrasena)

//PROCESA Y CONFIRMA EL CAMBIO DE CONTRASEÑA
router.post('/miPerfil/cambiarContrasena/:id', controller.contrasenaCambiada)

//CAMBIAR GENERO FAVORITO
router.post('/miPerfil/cambiarGenero/:id', controller.cambiarGenero)

                    // MIS RESENAS (LISTADO/EDITAR/ELIMINAR)

//LISTADO DE MIS RESENIAS
router.get('/resenias/:id', controller.listaMisResenias)


//MUESTRA EL FORMULARIO PARA EDITAR UNA RESENIA
router.get('/resenias/editar/:id', controller.editarResenia)

//PROCESA Y CONFIRMA LA EDICION DE LA RESENIA
router.post('/resenias/editar/:id', controller.reseniaEditada)


//MUESTRA OPCIONES ANTES DE BORRAR UNA RESENIA (SI/NO)
router.get('/resenias/borrar/:id', controller.borrarResenia)

//PROCESA Y CONFIRMA LA ELIMINACION DE LA RESENIA
router.post('/resenias/borrar/:id', controller.reseniaBorrada)



                // PERFIL PUBLICO

// PERFIL PUBLICO DE TODOS LOS USUARIOS
router.get('/perfil-usuario/:id', controller.perfilUsuario);


                    //FAVORITOS

router.get('/favoritos', controller.favoritos);



module.exports = router;