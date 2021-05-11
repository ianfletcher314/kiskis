const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const secretRoutes = require('./secretRoutes');

router.use('/users', userRoutes);
// router.use('/secrets', secretRoutes);

module.exports = router;