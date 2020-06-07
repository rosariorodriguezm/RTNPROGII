
module.exports = function (sequelize, DataTypes){

const resena = sequelize.define(
    'Resenas', { 
    //columnas de la DB
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    serie_id: DataTypes.INTEGER,
    usuario_id: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    texto_res: DataTypes.STRING, 
    updatedAt: DataTypes.DATE,
    puntaje: DataTypes.INTEGER,
},
);

resena.associate = function(models){
    //Una resena pertence a un usuario
    resena.belongsTo(models.Usuarios, {
        as: 'usuario',
        foreignKey: 'usuario_id'
    });
}

return resena; 

} 


