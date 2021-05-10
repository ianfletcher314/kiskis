const router = require('express').Router();
const { Secret, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // if (req.session.logged_in) {
        //     res.redirect('/dashboard');
        //     return;
        // }
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;