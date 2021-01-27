const express = require('express');
const { check, validationResult } = require('express-validator');
const SchoolEns = require('../models/SchoolEns');
const router = express.Router();

//http://localhost:4000/api/sch_ens
// @route  Post /api/sch_ens
// @desc   Post sch_ens
// @access Private
router.post(
  '/',
  [check('year', 'year is required').not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { year, enseignant, school } = req.body;
    try {
      const newYear = new SchoolEns({
        year,
        enseignant,
        school,
      });
      await newYear.save();
      res.send(newYear);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
