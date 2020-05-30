
module.exports = function (sequelize, DataTypes){
const resena = sequelize.define('Resenas', 
{ //cols//
    serie_id: DataTypes.INTEGER,
    usuario_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    texto_res: DataTypes.STRING, 
    updated_at: DataTypes.DATE,
    puntaje: DataTypes.INTEGER,
},
{
    timestamps: false,
}
);

resena.associate = function(models){
    //una reseña pertence a un usuario
    resena.belongsTo(models.Usuarios, {
        as: 'usuario',
        foreignKey: 'usuario_id'
    });
}

return resena; 

} 


