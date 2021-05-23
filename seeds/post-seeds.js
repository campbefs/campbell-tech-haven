const { Post } = require('../models');

const postData = [
  {
    title: 'Hi Im Chris',
    body: 'I went to disneyland and it was a great time. I had so much freaking fun',
    user_id: 1,
  },
  {
    title: 'hey Lauren here',
    body: 'I got really update in the hotel at Disneyland because the kids are so loud \
      they are about to drive me insane! \
      ',
    user_id: 2,
  },
  {
    title: 'hey yo Benjamin in da house',
    body: 'my favorite ride was probably big thunder mountain \
      I thought that the cars ride was fun and guardians of the galaxy was scary \
    ',
    user_id: 3,
  },
  {
    title: 'hey Hunter is the best',
    body: 'I rode on the rockets and loved it. I dont really get scared that much \
      even though I am little. I tend to love rollercoasters \
    ',
    user_id: 4,
  },
  {
    title: `don't forget about me, Owen!`,
    body: 'I am overwhelmed and what the hell was that you dragged me too! I am 3 mos old!',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;