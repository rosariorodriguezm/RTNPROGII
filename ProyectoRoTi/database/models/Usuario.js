

module.exports = function (sequelize, DataTypes) {
const usuario = sequelize.define(
    'Usuarios', 
     { 
        nombre_usuario: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        fecha_nac: DataTypes.DATE,
}, {
    timestamps: false,
}); 

usuario.associate = function(models){
    usuario.hasMany(models.Resenas, {
        as: 'Resenas',
        foreignKey: 'usuario_id'
    });
} 

return usuario; 

}  


