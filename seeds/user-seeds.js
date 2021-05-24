const { User } = require('../models');

const userData = [
  {
    username: 'ccamp',
    password: 'password'
    // password: '$2b$10$D5v3509f45t7mf1k0vOfauwBquNh3c30G/0lyQuqT5alXKtzMFbhq'
  },
  {
    username: 'lcamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
  {
    username: 'bcamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
  {
    username: 'hcamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
  {
    username: 'ocamp',
    password: '1234'
    // password: '$2b$10$SOEX3iON3i9EDmzSuFQesO8lapjybHQBsaIM5kRNrm8WB8nlciCNO'
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;