const express = require("express");
const { check, validationResult } = require("express-validator");
const City = require("../models/City");
const router = express.Router();
const auth = require("../middleware/authAdmin");

//http://localhost:4000/api/city
// @route  Post /api/city
// @desc   Post city
// @access Private
router.post(
  "/",
  auth,
  [check("city", "city is required").not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { city } = req.body;
    try {
      const newCity = new City({
        city,
      });
      await newCity.save();
      res.send(newCity);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
