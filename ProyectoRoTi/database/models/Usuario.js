

const Reseña = require('models/Reseña.js')

module.exports = function (sequelize, DataTypes) 
{
const Usuario = sequelize.define('Usuarios', 
    { //cols//
        nombre: DataTypes.STRING,
        email: DataTypes.STRING,
        id: DataTypes.INTEGER,
        password: DataTypes.STRING,
        fecha_nac: DataTypes.DATE,
}, {
    timestamps: false,
}); 

return Usuario; 

} ; 

Usuario.associate = function(models){
    Usuario.hasMany(Reseña, {
        as: "usuarios",
        foreign_key: "usuario_id"
    })};

