const { Recipe } = require("../models");

const recipeData = [
    {
        picture: "chicken.png",
        title: "Italian Chicken Cacciatore",
        instructions: "weasdfafetfgnryujdasdvaertw43hgbdf",
        ingredients: [
            "3 tablespoons olive oil, divided",
            "6 bone-in skinless chicken thighs",
            "Salt and pepper, to season",
            "1 medium onion, diced",
            "2 tablespoons minced garlic, (or 6 cloves)",
            "1 small red bell pepper (capsicum), diced",
            "1 large carrot, peeled and sliced",
            "10 oz (300g) mushrooms, sliced",
            "1/2 cup pitted black olives",
            "8 sprigs thyme",
            "2 tablespoons each freshly chopped parsley and basil plus more to garnish",
            "1 teaspoon dried oregano",
            "150 ml red wine",
            "28 oz (820g) crushed tomatoes",
            "2 tablespoons tomato paste",
            "7 oz (200g) Roma tomatoes, halved",
            "1/2 teaspoon red pepper flakes",
        ],
        user_id: 3,
    },
    {
        picture: "taquitos.png",
        title: "Vegan Air Fryer Taquitos",
        instructions: "w345tvnr67i857kasdvaw3r5uk,y87o78o",
        ingredients: [],
        user_id: 1,
    },
    {
        picture: "lamb.png",
        title: "Lamb Souvlaki",
        instructions: "werqwerqvdsfgerwebdfqwefbsdfhert",
        ingredients: [],
        user_id: 2,
    },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;