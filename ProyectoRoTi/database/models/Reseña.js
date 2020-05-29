
module.exports = function (sequelize, DataTypes){
const reseña = sequelize.define('Reseñas', 
{ //cols//
    serie_id: DataTypes.INTEGER,
    usuario_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    texto: DataTypes.STRING, 
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


