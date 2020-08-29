const { Recipe } = require("../models");

const recipeData = [
    {
        picture: "chicken.png",
        description: "Italian Chicken Cacciatore",
        user_id: 3,
    },
    {
        picture: "taquitos.png",
        description: "Vegan Air Fryer Taquitos",
        user_id: 1,
    },
    {
        picture: "lamb.png",
        description: "Lamb Souvlaki",
        user_id: 2,
    },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;