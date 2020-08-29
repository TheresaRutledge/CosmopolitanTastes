const { User } = require("../models");

const userData = [
    {
        username: "Ken",
        password: "adifnew1D",
    },
    {
        username: "Tim",
        password: "4xnSdfl?",
    },
    {
        username: "Claire",
        password: "1dvu0aP",
    },
    {
        username: "Sara",
        password: "8sefwez(12)",
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;