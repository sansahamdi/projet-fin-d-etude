const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/authAdmin');
const School = require('../models/School');
const router = express.Router();

//http://localhost:4000/api/school
// @route  Post /api/school
// @desc   Post school
// @access Private
router.post(
  '/',
  auth,
  [check('school', 'school is required').not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { school, sector } = req.body;
    try {
      const newSch = new School({
        school,
        sector,
      });
      await newSch.save();
      res.send(newSch);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
