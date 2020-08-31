const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id:body.user.id,
            recipe_id: body.recipe_id
        })
        .then(()=>{
            return Recipe.findOne({
                where: {
                    id: body.recipe_id
                }
            })
        })
    }
}

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
        //Need to move index.js inside the model for this to work
        // ingredients: {
        //     type: DataTypes.ARRAY(DataTypes.TEXT),
        //     allowNull:false,
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references:{
                model: "user",
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