const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Handlebars imports
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create( { helpers });
const path = require('path');

// Session imports
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// App & Port
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars middleware
app.use(express.static(path.join(__dirname, 'public'))); // handlebars middleware

// session middleware
app.use(session(sess));

// handlebars stuff
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync( {force: false})
  .then( () => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  })

