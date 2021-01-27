const express = require('express');
const { check, validationResult } = require('express-validator');
const Situation = require('../models/Situation');
const router = express.Router();

//http://localhost:4000/api/situation
// @route  Post /api/situation
// @desc   Post situation
// @access Private
router.post(
  '/',
  [check('situation', 'situation is required').not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { situation } = req.body;
    try {
      const newSituation = new Situation({
        situation,
      });
      await newSituation.save();
      res.send(newSituation);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
);

// // @Route    Get api/situation
// // @desc     Get all situations
// // @access   Private

router.get('/', async (req, res) => {
  try {
    const situations = await Situation.find();

    res.send(situations);
  } catch (err) {
    res.status(500).send([{ msg: 'server error' }]);
  }
});

module.exports = router;
