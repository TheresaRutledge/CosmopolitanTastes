const User = require('./user');
const Recipe = require('./recipe');
const Vote = require('./vote');



User.hasMany(Recipe, {foreignKey: 'user_id'});

Recipe.belongsTo(User, {foreignKey: 'user_id'});

User.belongsToMany(Recipe, {
    through: Vote,
    as: 'voted_recipes',
    foreignKey:'user_id'
});

Vote.belongsTo(User, {foreignKey:'user_id'});

Vote.belongsTo(Recipe, {foreignKey:'recipe_id'});

User.hasMany(Vote, {foreignKey: 'user_id'});

Recipe.hasMany(Vote,{foreignKey:'recipe_id'});

module.exports = {User,Recipe,Vote};