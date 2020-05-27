
module.exports = function (sequelize, DataTypes){
const reseña = sequelize.define('Reseñas', 
{ //cols//
    id_reseña: DataTypes.INTEGER,
    id_serie: DataTypes.INTEGER,
    id_usuario: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    puntaje: DataTypes.INTEGER,
});

reseña.associate = function(models){
    reseña.belongsTo(models.Usuarios, {
        as: 'user',
        foreign_key: 'id_usuario'
    });
}

return reseña; 

} 


