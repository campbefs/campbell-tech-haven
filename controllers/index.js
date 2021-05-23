const router = require('express').Router();
const apiRoutes = require('./api');

// frontend routes (handlebar)
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
// const loginRoutes = require('./login-routes');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.send("Wrong Route!") // <h1>Wrong Route!</h1>
});

module.exports = router;