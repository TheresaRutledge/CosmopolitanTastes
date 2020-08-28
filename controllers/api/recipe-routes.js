const router = require('express').Router();
const {User, Recipe, Vote} = require('../../models');
const sequelize = require('../../config/connection');

//get all recipes /api/recipes
router.get('/',(req,res)=> {

})

//get recipe by id /api/recipes/id
router.get('/:id',(req,res) => {

})

//add a new recipe /api/recipes
router.post('/',(req,res) => {

})

//update a recipe
router.put('/:id',(req,res)=> {

})

//delete a recipe /api/id
router.delete('/:id', (req,res) => {

})

//upvote a recipe /api/recipes/upvote
router.put('/upvote',(req,res)=> {
    
})

module.exports = router;