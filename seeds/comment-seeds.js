const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    comment_text: `maybe you should stay back with the kids next time...`,
    post_id: 2
  },
  {
    user_id: 2,
    comment_text: `I can't believe how many times you rode that!`,
    post_id: 3
  },

  {
    user_id: 3,
    comment_text: `Why are you screaming all the time tho?`,
    post_id: 4
  },
  {
    user_id: 4,
    comment_text: `Don't out-baby me!? I am the baby!`,
    post_id: 5
  },
  {
    user_id: 5,
    comment_text: `You're taking me on ridiculous trips. What the hell!?`,
    post_id: 1
  },
  {
    user_id: 1,
    comment_text: `I think you should go on the Incredi-coaster next time!`,
    post_id: 3
  },
  {
    user_id: 4,
    comment_text: `That is a lot of us little ones`,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;