const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: 'Internet Economy in Africa',
    body: 'In February, Nigerian fintech startup Mono announced its acceptance into Y Combinator and, at the time, it wanted to build the Plaid for Africa. Three months later, the startup has a different mission: to power the internet economy in Africa and has closed $2 million in seed investment towards that goal.',
    user_id: 1,
  },
  {
    id: 2,
    title: 'British AI Startup',
    body: 'British artificial intelligence (AI) company, Faculty has raised £30 million ($42.5M) in growth funding from the Apax Digital Fund (ADF). The startup has now raised a total of £40m ($56.6M) to date.',
    user_id: 2,
  },
  {
    id: 3,
    title: 'Taking Microsoft’s Surface Laptop 4 for a spin',
    body: 'These days, the path of least resistance in laptop design is straight-up knocking off the MacBook. We’ve certainly seen our share of egregious cases over the years. Microsoft, however, has defiantly forged its own path with industrial design across the board. Its products are largely interesting and innovative — something not every hardware manufacturer can say these days.',
    user_id: 3,
  },
  {
    id: 4,
    title: 'Billboards? Nah, just buy a media company instead',
    body: 'Startups used to be obsessed with billboards. It was the first thing I noticed when I moved to San Francisco: venture-backed companies including Eaze, Airbnb, and notoriously, Brex, would post large billboard advertisements all over the city to grab attention and eyeballs. When I dug into it more, I learned this type of old school, outdoor advertising was a response to the increasingly crowded online channels, such as Facebook and Instagram advertisements.',
    user_id: 4,
  },
  {
    id: 5,
    title: `SNAP on fire!`,
    body: 'Snap spends more than $500M to acquire AR display startup WaveOptics',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;