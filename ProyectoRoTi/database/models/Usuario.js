
module.exports = function (sequelize, DataTypes) {
const usuario = sequelize.define(
    'Usuarios', { 
    //columnas de la DB
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
            },
    nombre_usuario: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fecha_nac: DataTypes.DATE,
    genero_fav: DataTypes.STRING,

}, {
    timestamps: false,
}); 

usuario.associate = function(models){
    //Un usuario tiene muchas resenas
    usuario.hasMany(models.Resenas, {
        as: 'resenia',
        foreignKey: 'usuario_id',
        
    });
} 
return usuario; 
}  

