const router = require('express').Router();

const userRoutes = require('./users-routes.js');
const recipeRoutes = require('./recipe-routes.js');

router.use('/users', userRoutes);
router.use('/recipes',recipeRoutes);


module.exports = router;