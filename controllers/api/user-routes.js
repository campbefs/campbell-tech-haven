const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['title', 'createdAt']
      }
    ]
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  User.create(req.body) // username, password
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'No user found dude'});
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects: username, password
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(dbUserData => {

      // console.log(dbUserData.get({plain: true}));
      // console.log(dbUserData);

      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!'});
        return;
      }

      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in! '});
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

router.post('/signup', (req, res) => {
  // expects: username, password
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(dbUserData => {
      console.log('userdata', dbUserData);
      console.log('req.body', req.body);
      if (dbUserData) {
        res.status(400).json({ message: 'Username already exists bro!'});
        return;
      }

      if (req.body.password.length < 4) {
        res.status(400).json({ message: 'Password too short. Must be 4 characters!'});
        return;
      }

      // Post -- add user to table
      User.create(req.body)
        .then(() => {
          res.json({ message: 'You are now signed up!'});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        })

    })
})

module.exports = router;
