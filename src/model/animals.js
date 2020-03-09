// Implementar o esquema de Animals, seguindo o proposto no README.md
module.exports = (sequelize, DataTypes) => 
    sequelize.define('animals',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        pet_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        animal_type: DataTypes.ENUM('Cão', 'Gato', 'Outros'),
        pet_age: DataTypes.INTEGER,
        pet_size: DataTypes.ENUM('Grande', 'Médio', 'Pequeno'),
        sex: DataTypes.STRING,
        color: DataTypes.STRING,
        image_url: DataTypes.STRING
    })
