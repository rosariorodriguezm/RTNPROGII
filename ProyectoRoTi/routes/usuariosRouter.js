const express = require('express')
const router = express.Router();

const controller = require('../controllers/usuariosController')


//localhost:3000/usuarios   

//BUSCADOR DE USUARIOS y todos los usuarios
router.get('/', controller.buscarUsuarios);

// RESULTADOS DEL BUSCADOR DE USUARIOS
router.post('/respuesta-usuarios', controller.resUsuario)



//INICIAR SESION
router.get('/perfil', controller.perfil);

//PROCESA EL INICIO DE SESION Y REDIRECCIONA A PAG MIS RESENIAS
router.post('/perfil', controller.confirmarUsuario);

//LISTADO DE MIS RESENIAS
router.get('/resenias/:id', controller.listaMisResenias)



//MUESTRA EL FORMULARIO PARA EDITAR UNA RESENIA
router.get('/resenias/editar/:id', controller.editarResenia)

//PROCESA Y CONFIRMA LA EDICION DE LA RESENIA
router.post('/resenias/editar/:id', controller.reseniaEditada)



//MUESTRA EL FORMULARIO PARA BORRAR UNA RESENIA
router.get('/resenias/borrar/:id', controller.borrarResenia)

//PROCESA Y CONFIRMA LA ELIMINACION DE LA RESENIA
router.post('/resenias/borrar/:id', controller.reseniaBorrada)

//PAG INTERMEDIA
router.get('/resenias/borrar/:id/listo', controller.listoBorrar)



//UNA VEZ INICIADA SESION TE MUESTRA TU PERFIL PRIVADO
router.get('/miPerfil/:id', controller.miPerfil)

// PERFIL PUBLICO DE TODOS LOS USUARIOS
router.get('/perfil-usuario/:id', controller.perfilUsuario);


// FORM PARA REGISTRATE
router.get('/registrarse', controller.registrarse);

// UNA VEZ REGISTRADO TE LLEVA A X 
router.post('/registrarse', controller.guardarUsuario);

// FORM PARA ELIMINAR CUENTA
router.get('/miPerfil/borrar/:id', controller.eliminarUsuario);

// PROCESA Y CONFIRMA LA ELIMINACION DEL USUARIO
router.post('/miPerfil/borrar/:id', controller.usuarioEliminado);


router.get('/favoritos', controller.favoritos);

router.get('/pruebaSession', function(req, res){
    if  (req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;
    res.send('session tiene el nro' + req.session.numeroVisitas)
})

module.exports = router;