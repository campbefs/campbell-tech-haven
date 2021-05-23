const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');

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
      res.render('dashboard', {posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;