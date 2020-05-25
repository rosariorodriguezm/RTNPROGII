
module.exports = function (sequelize, DataTypes){
const reseña = sequelize.define('Reseñas', 
{ //cols//
    reseña_id: DataTypes.INTEGER,
    usuario_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    puntaje: DataTypes.INTEGER,
});

reseña.associate = function(models){
    reseña.belongsTo(models.Usuarios, {
        as: 'user',
        foreign_key: 'usuario_id'
    });
}

return reseña; 

} 


