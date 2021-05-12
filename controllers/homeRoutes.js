const router = require('express').Router();
const { route } = require('.');
const { Secret, User } = require('../models');
const withAuth = require('../utils/auth');


//homepage
// router.get('/', async (req, res) => {
//     try {
//         if (!req.session.logged_in) {
//             res.redirect('/login');
//             return;
//         }  
//         res.render('dashboard');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/login', async (req, res) => {
//   // try {
//   //     res.redirect('/');
//   // } catch (err) {
//   //     res.status(500).json(err);
//   // }
//   if(req.session.logged_in) {
//     res.redirect('/');
//     return
//   }
//   res.render('login')
// });


router.get('/', async (req, res) => {
  try {
      if (req.session.logged_in) {
          res.redirect('/dashboard');
          return;
      }  
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
try {
    res.redirect('/');
} catch (err) {
    res.status(500).json(err);
}
});






//register page will appear when click on signup
router.get('/signup', async (req, res) => {
  try {
      res.render('signup');
  } catch (err) {
      res.status(500).json(err);
  }
});

//user dashboard will view list of secret on left panel and view selected secret body on right page, login history button
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Secret }],
      });
  
      const user = userData.get({ plain: true });
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post and put for secret
router.get('/newsecret',withAuth, async (req, res) => {
    try {

        res.render('newSecret');
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;