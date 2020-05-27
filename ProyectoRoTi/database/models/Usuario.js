

module.exports = function (sequelize, DataTypes) {
const usuario = sequelize.define(
    'Usuarios', 
     { 
        nombre_usuario: DataTypes.STRING,
        email: DataTypes.STRING,
        id_usuario: DataTypes.INTEGER,
        password: DataTypes.STRING,
        fecha_nac: DataTypes.DATE,
}, {
    timestamps: false,
}); 

usuario.associate = function(models){
    usuario.hasMany(models.Reseñas, {
        as: 'resenia',
        foreign_key: 'id_usuario'
    });
} 

return usuario; 

}  


