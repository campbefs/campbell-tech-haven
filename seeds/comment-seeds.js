const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    comment_text: `AI kind of scares me`,
    post_id: 2
  },
  {
    user_id: 2,
    comment_text: `I really think Microsoft's Laptop's are underrated!`,
    post_id: 3
  },

  {
    user_id: 3,
    comment_text: `I don't understand why people still pay for billboards. they are an eye sore too`,
    post_id: 4
  },
  {
    user_id: 4,
    comment_text: `I think I'm too young for snapchat... maybe when I'm older`,
    post_id: 5
  },
  {
    user_id: 5,
    comment_text: `It's about time we connected people in 3rd world nations with the Internet!!`,
    post_id: 1
  },
  {
    user_id: 1,
    comment_text: `Let's be honest, the Surface kind of stinks`,
    post_id: 3
  },
  {
    user_id: 4,
    comment_text: `This is awesome!`,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;