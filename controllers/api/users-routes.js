const router = require('express').Router();
const {User,Recipe} = require('../../models');
const sequelize = require('../../config/connection');

//get users /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

//get user by id /api/users/id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            //if no user exists send error
            if (!userData) {
                res.status(404).json({ message: 'No user with this id' });
                return;
            }
            //if user exists return thier data
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
})

//new user
router.post('/', (req, res) => {
    //expects {username:' ', password:' '}
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
        .then(userData => {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;

                res.json(userData)
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

//update user
router.put('/:id', (req, res) => {
    //expects username and password
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'no user with this id' })
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'no user with that id' });
                return;
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(userData => {
      if (!userData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
      }
      const validPassword = userData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: `Incorrect Password!` });
        return;
      }
      req.session.save(()=> {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.json({ user: userData, message: 'You arelogged in!' });
      });
    });
  });

//logout
router.post('/logout',(req,res)=>{
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;