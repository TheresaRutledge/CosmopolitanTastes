const sequelize = require('../config/connection');
const { Recipe, User, Vote } = require('../models');
const router = require('express').Router();

//home page route - shows all recipes
router.get('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.render('login');
        return;
    }
    Recipe.findAll({
        attributes: [
            'id',
            'picture',
            'title',
            'instructions',
            'ingredients',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(recipeData => {
            const recipes = recipeData.map(recipe => recipe.get({ plain: true }));
            res.render('homepage', { recipes, loggedIn: req.session.loggedIn })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);

        })
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/recipe/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'picture',
            'title',
            'instructions',
            'ingredients',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(recipeData => {
            if (!recipeData) {
                res.status(404).json({ message: 'No recipe with that id' });
                return;
            }
            const recipe = recipeData.get({ plain: true });
            const ingredientsArray = recipe.ingredients.split(',');
            recipe.ingredients = ingredientsArray;
            console.log(recipe);
            res.render('single-recipe', { recipe, loggedIn: req.session.loggedIn })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

});

router.get('/add', (req, res) => {
    if (!req.session.loggedIn) {
        return;
    }
    res.render('add-recipe',{loggedIn: req.session.loggedIn});
})

module.exports = router;