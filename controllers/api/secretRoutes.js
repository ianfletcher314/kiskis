const router = require('express').Router();
const { Secret, User, LoginHistory } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
    try {
      const secretData = await Secret.findByPk(req.params.id, {
        include: [{model: Secret}]
      });
      if (!secretData) {
        res.status(404).json({ message: 'No secrets found!' });
        return;
      }
      res.status(200).json(secretData);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const newSecret = await Secret.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newSecret);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const secretData = await Secret.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      
      if (!secretData) {
        res.status(404).json({ message: 'No secret found with this id!' });
        return;
      }
      res.status(200).json(secretData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const secretData = await Secret.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!secretData) {
        res.status(404).json({ message: 'No secret found!' });
        return;
      }
  
      res.status(200).json(secretData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;