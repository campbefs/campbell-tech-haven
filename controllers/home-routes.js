const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// Home Route
router.get('/', (req, res) => {
  Post.findAll({
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['comment_text'],
        include: [{
          model: User,
          attributes: ['username']
        }]
      }
    ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const posts = dbPostData.map(post => post.get({ plain: true}));
      // console.log(posts);
      res.render('home', {posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login
router.get('/login', (req, res) => {
  res.render('login');
});

// Signup
router.get('/signup', (req, res) => {
  res.render('signup');
})


// Singleblog -- get its own route
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      attributes: ['comment_text'],
      include: [{
        model: User,
        attributes: ['username']
      }]
    }
  ]
  })
    .then(dbPostData => {
      // console.log('dbPostData: ', dbPostData);
      // const posts = dbPostData.map(post => post.get({ plain: true}));
      const posts = [ dbPostData.get({ plain: true }) ]
      console.log('posts: ', posts);
      console.log('comment: ', posts[0].comments);
      res.render('singleblog', {posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Editpost -- get it's own route

// add comment -- get it's own route


module.exports = router;