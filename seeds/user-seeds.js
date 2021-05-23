const { User } = require('../models');

const userData = [
  {
    username: 'ccamp',
    password: 'password'
  },
  {
    username: 'lcamp',
    password: '1234'
  },
  {
    username: 'bcamp',
    password: '1234'
  },
  {
    username: 'hcamp',
    password: '1234'
  },
  {
    username: 'ocamp',
    password: '1234'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;