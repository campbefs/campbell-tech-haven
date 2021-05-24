const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Dashboard
router.get('/', withAuth, (req, res) => {
  User.findOne({
    where: {
      id: 1 // req.session.user_id???
    },
    attributes: ['id', 'username'],
    include: [
      {
        model: Post,
        attributes: ['title', 'body', 'createdAt', 'id']
      }
    ]
  })
    .then(dbUserData => {
      // serialize data before passing to template
      const userData = dbUserData.get({ plain: true});
      const posts = userData.posts;
      res.render('dashboard', {posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create post
router.get('/createpost', withAuth, (req, res) => {
  res.render('createpost');
})

router.get('/edit-post/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: User,
      attributes: ['username']
    }]
  })
    .then(dbPostData => {
      const mypost = dbPostData.get({ plain: true });
      // console.log(mypost);
      res.render('editpost', {mypost, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// //// THIS IS HOW SERIALIEZD DATA LOOKS
// [
//   {
//     id: 1,
//     title: 'sailing the seas of cheese',
//     body: "I don't know if this is even going to work.",
//     user_id: 1,
//     createdAt: 2021-05-23T00:27:07.000Z,
//     updatedAt: 2021-05-23T05:14:57.000Z,
//     user: { username: 'ccamp' },
//     comments: [ [Object] ]
//   }
// ]

