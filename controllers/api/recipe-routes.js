const router = require('express').Router();
// const {Recipe,User,Vote} = require('../../models');
const { User, Recipe } = require('../../models/');
const sequelize = require('../../config/connection');

//get all recipes /api/recipes
router.get('/', (req, res) => {
    Recipe.findAll()
        // .then(recipeData => res.json(recipeData))
        .then(recipeData => {
            res.json(recipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

//get recipe by id /api/recipes/id
router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(recipeData => res.json(recipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

//add a new recipe /api/recipes
router.post('/', (req, res) => {
    //expects{picture, title,instructions,ingredients,user_id}
    Recipe.create({
        picture: req.body.picture,
        title: req.body.title,
        instructions: req.body.instructions,
        ingredients: req.body.ingredients,
        user_id: req.body.user_id
    })
        .then(recipeData => res.json(recipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

//update a recipe
router.put('/:id', (req, res) => {
    //expects{picture, title,instructions,ingredients}
    Recipe.update(
        {
            picture: req.body.picture,
            title: req.body.title,
            instructions: req.body.instructions,
            ingredients: req.body.ingredients
        },
        {
            where: {
                id: req.params.id
            }
        }
       
    )
        .then(recipeData => {
            if (!recipeData) {
                res.status(404).json({ message: 'no recipe with that id' });
                return;
            }
            res.json(recipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete a recipe /api/id
router.delete('/:id', (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(recipeData => {
            if (!recipeData) {
                res.status(404).json({ message: 'no recipe with that id' });
                return;
            }
            res.json(recipeData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//upvote a recipe /api/recipes/upvote
router.put('/upvote', (req, res) => {
    if (req.session) {
        Recipe.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, User })
            .then(voteData => res.json(voteData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }

});

module.exports = router;