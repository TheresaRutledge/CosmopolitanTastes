const sequelize = require('../config/connection');
const {Recipe,User} = require('../models');
const router = require('express').Router();

//home page route - shows all recipes
router.get('/', (req, res) => {
  res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/recipe/:id', (req, res) => {
  // const post = {
  //   id: 1,
  //   post_url: 'https://handlebarsjs.com/guide/',
  //   title: 'Handlebars Docs',
  //   created_at: new Date(),
  //   vote_count: 10,
  //   comments: [{}, {}],
  //   user: {
  //     username: 'test_user'
  //   }
  // };

  res.render('single-recipe', { recipe });
});

module.exports = router;