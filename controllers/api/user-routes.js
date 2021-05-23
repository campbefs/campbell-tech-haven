const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../../models');

router.get('/', (req, res) => {
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
