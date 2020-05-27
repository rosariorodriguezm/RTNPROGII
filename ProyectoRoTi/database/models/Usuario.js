

module.exports = function (sequelize, DataTypes) {
const usuario = sequelize.define(
    'Usuarios', 
     { 
        nombre: DataTypes.STRING,
        email: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
        password: DataTypes.STRING,
        fecha_nac: DataTypes.DATE,
}, {
    timestamps: false,
}); 

usuario.associate = function(models){
    usuario.hasMany(models.Reseñas, {
        as: 'resenia',
        foreign_key: 'usuario_id'
    });
} 

return usuario; 

}  


