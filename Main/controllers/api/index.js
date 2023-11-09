const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tvshowRoutes = require('./tvshowRoutes');

router.use('/users', userRoutes);
router.use('/tvshows', tvshowRoutes);

module.exports = router;
