const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/authAdmin');
const router = express.Router();

const Sector = require('../models/Sector');

// http://localhost:4000/api/secteur
// @Route    Post /api/secteur
// @desc     Post secteur
// @access   Private
router.post(
  '/',
  auth,
  [check('sector', 'sector is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(error.array());
    }

    const { inspector, sector, city } = req.body;
    try {
      const newArr = new Sector({
        inspector,
        sector,
        city,
      });
      await newArr.save();
      res.send(newArr);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
