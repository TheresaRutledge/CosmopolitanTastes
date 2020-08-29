const { Recipe } = require("../models");

const recipeData = [
    {
        picture: "",
        description: "Italian Chicken Cacciatore",
        user_id: 3,
    },
    {
        picture: "",
        description: "Vegan Air Fryer Taquitos",
        user_id: 1,
    },
    {
        picture: "",
        description: "Lamb Souvlaki",
        user_id: 2,
    },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;