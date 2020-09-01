const sequelize = require('../config/connection');
const {Recipe,User} = require('../models');
const router = require('express').Router();

//home page route - shows all recipes
router.get('/', (req, res) => {
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
    const recipe = recipeData.map(recipe => recipe.get({plain: true}));
    res.render('homepage', {recipe,loggedIn: req.session.loggedIn })
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
  // const recipe = {
  //   id: 1,
  //   picture: 'https://handlebarsjs.com/guide/',
  //   title: 'Handlebars Docs',
  //   created_at: new Date(),
  //   vote_count: 10,
  //   user: {
  //     username: 'test_user'
  //   }
  // };

  res.render('single-recipe', { recipe });
});

module.exports = router;