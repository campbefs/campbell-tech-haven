const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// Dashboard
router.get('/', (req, res) => {
  Post.findAll({
    where: {
      id: 1 // req.session.user_id???
    },
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
      res.render('dashboard', {posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create post
router.get('/createpost', (req, res) => {
  res.render('createpost');
})


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

