const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authAdmin = require('../middleware/authAdmin');

const Admin = require('../models/Administrateur');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//@http://localhost:4000/api/admin *get admin by Token

router.get('/', authAdmin, async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@http://localhost:4000/api/admin *post admin

router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password is require minimum 6 character').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }

    const { name, email, password } = req.body;
    try {
      let newAdmin = await Admin.findOne({ email });
      if (newAdmin) {
        return res.status(400).send([{ msg: 'email has already exist' }]);
      }

      newAdmin = new Admin({ name, email, password });

      const salt = await bcrypt.genSalt(10);
      newAdmin.password = await bcrypt.hash(password, salt);

      await newAdmin.save();
      const payload = {
        user: {
          id: newAdmin.id,
        },
      };
      jwt.sign(payload, config.get('tokenSecret'), (err, token) => {
        if (err) return res.status(400).send(err);

        res.json({ token });
      });
    } catch (err) {
      res.status(500).send('server error');
    }
  }
);

// http://localhost:4000/api/admin/auth
router.post(
  '/auth',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }

    const { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).send([{ msg: 'Invalid Credentials' }]);
      }

      const mdp = await bcrypt.compare(password, admin.password);
      if (!mdp) {
        return res.status(400).send([{ msg: 'Invalid Credentials' }]);
      }

      const payload = {
        user: {
          id: admin._id,
        },
      };
      jwt.sign(payload, config.get('tokenSecret'), (err, token) => {
        if (err) return res.statuus(400).send(err);

        res.json({ token, admin });
      });
    } catch (err) {
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
