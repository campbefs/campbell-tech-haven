const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// do i need a through to connect User (of post) to Comments? naw

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

User.hasMany(Comment, {
  foreignKey: 'user_id'
})

Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };




