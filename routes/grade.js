const express = require("express");
const { check, validationResult } = require("express-validator");
const Grade = require("../models/Grade");
const router = express.Router();

//http://localhost:4000/api/grade
// @route  Post /api/grade
// @desc   Post grade
// @access Private
router.post(
  "/",
  [check("grade", "grade is required").not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { grade } = req.body;
    try {
      const newGrade = new Grade({
        grade,
      });
      await newGrade.save();
      res.send(newGrade);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

// // @Route    Get api/grade
// // @desc     Get all grade
// // @access   Private

router.get("/", async (req, res) => {
  try {
    const grades = await Grade.find();

    res.send(grades);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

module.exports = router;
