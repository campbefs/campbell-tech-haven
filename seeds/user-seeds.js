const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'ccamp',
    password: 'password'
    // password: '$2b$10$D5v3509f45t7mf1k0vOfauwBquNh3c30G/0lyQuqT5alXKtzMFbhq'
  },
  {
    id: 2,
    username: 'lcamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
  {
    id: 3,
    username: 'bcamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
  {
    id: 4,
    username: 'hcamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
  {
    id: 5,
    username: 'ocamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;