const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

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
      res.render('home', {posts, loggedIn: req.session.loggedIn });
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
router.get('/post/:id', withAuth, (req, res) => {
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
      }],
      order: [['id', 'DESC']]
    }
  ]
  })
    .then(dbPostData => {
      const posts = [ dbPostData.get({ plain: true }) ]
      res.render('singleblog', {posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add comment -- get it's own route
router.get('/post/:id/comment', withAuth, (req, res) => {
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
        attributes: ['username'],
      }],
      order: [['id', 'DESC']]
    }
    ],

  })
    .then(dbPostData => {
      const posts = [ dbPostData.get({ plain: true }) ]
      const user_id = req.session.user_id;  // passing the user_id into HTML
      console.log(posts);
      res.render('addcomment', {
        posts,
        loggedIn: req.session.loggedIn,
        user_id
      });


    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Edit post -- get it's own route


module.exports = router;