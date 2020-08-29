const sequelize = require('../config/connection');
 const {Recipe,User} = require('../models');
 const router = require('express').Router();

 //home page route - shows all recipes
 router.get('/',(req,res)=> {
    //  Recipe.findAll({
    //      attributes: [
    //          'id',
    //          'picture',
    //          'description',

    //      ]
    //  })
 })

 module.exports = router;