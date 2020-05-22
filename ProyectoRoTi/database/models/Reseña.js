
const Usuario = require('models/Usuario.js')


const Reseña = sequelize.define("Reseñas", 
{ //cols//
    id: DataTypes.INTEGER,
    usuario_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    puntaje: DataTypes.INTEGER,
});

Reseña.associate = function(models){
    Reseña.belongsTo(models.Usuarios, {
        as: "usuario",
        foreign_key: "usuario_id"
    });
}

module.exports = Reseña;