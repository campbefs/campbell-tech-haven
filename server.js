const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Session imports
// const path = require('path');
// const exphbs = require('express-handlebars');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// helper code here

// App & Port
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess));

// handlebars stuff
// app.enginer('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync( {force: false})
  .then( () => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  })

