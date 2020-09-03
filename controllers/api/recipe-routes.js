const router = require('express').Router();
const { User, Recipe, Vote } = require('../../models/');
const sequelize = require('../../config/connection');
const multer = require('multer');
const path = require('path');
const upload = multer({dest:path.join(__dirname,'../../public/photos')});


// //upload picture
// router.post('/profile',upload.single('recipe-image'),function(req,res,next){
//     //should 'profile be a different route name?
//     // req.file is file to be stored where?
    
// })


//get all recipes /api/recipes
router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: [
            'id',
            'picture',
            'title',
            'instructions',
            'ingredients',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'),
                'vote_count']
        ]
    })
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
router.post('/', upload.single('recipeImage'),(req, res) => {
      //expects{picture, title,instructions,ingredients,user_id}
    let recipe = JSON.parse(req.body.recipe);
    recipe.picture = req.file.filename;
    recipe.user_id = req.session.user_id;
  
    Recipe.create(
       recipe
    )
        .then(recipeData => res.json(recipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

})

//upvote a recipe /api/recipes/upvote
router.put('/upvote', (req, res) => {
    // console.log(`recipe_id ${req.body.recipe_id}`);
    if (req.session) {
        //pass session id with properties
        console.log('in if')
        Recipe.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, User })
            .then(voteData => res.json(voteData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }

});


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



module.exports = router;