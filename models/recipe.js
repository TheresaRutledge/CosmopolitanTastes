const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references:{
                model: "User",
                key: "id",
            }
        }  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    },
);

module.exports = Recipe;