const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Posts = require("../models/Posts");
const Ensaignant = require("../models/Enseignant");
const auth = require("../middleware/authAdmin");

//@ http://localhost:4000/api/post  *add post *private
router.post("/", [
  auth,
  [check("text", "enter your text").not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { text } = req.body;
    try {
      const prof = await Ensaignant.findOne({ _id: req.user.id });

      const newPost = new Posts({
        text,
        user: req.user.id,
        name: prof.name,
      });

      await newPost.save();
      res.send(newPost);
    } catch (err) {
      res.status(500).send([{ msg: "server error" }]);
    }
  },
]);

//@ http://localhost:4000/api/post/delete
router.delete("/delete/:_id", auth, async (req, res) => {
  const { _id } = req.params;
  try {
    const postRemove = await Posts.findOneAndDelete({ _id });

    res.send(postRemove);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/post *add comment *private
router.put("/:id", [
  auth,
  [check("text", "enter your comment").not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { id } = req.params;
    const { text } = req.body;
    try {
      const post = await Posts.findById(id);
      if (!post) {
        return res.status(400).send([{ msg: "post not found" }]);
      }
      const prof = await Ensaignant.findById(req.user.id);
      const newComment = {
        text,
        user: req.user.id,
        name: prof.name,
      };
      post.comment.unshift(newComment);
      await post.save();
      res.send(post.comment);
    } catch (err) {
      res.status(500).send([{ msg: "server error" }]);
    }
  },
]);

//@ http://localhost:4000/api/post/id/comment/id *delete comment *private
router.delete("/:_id/comment/:com_id", auth, async (req, res) => {
  const { _id, com_id } = req.params;
  try {
    const post = await Posts.findById(_id);
    if (!post) {
      return res.status(400).send([{ msg: "post not found" }]);
    }

    const comment = post.comment.filter((com) => com._id.toString() !== com_id);
    post.comment = comment;
    await post.save();
    res.send(post.comment);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/post/like
router.put("/like/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    const like = post.like.filter((like) => like.user == req.user.id);
    if (like.length > 0) {
      return res.status(400).send([{ msg: "you have been liked " }]);
    }

    post.like.push({ user: req.user.id });
    await post.save();
    res.send(post.like);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/post/like
router.delete("/like/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    const like = post.like.filter((like) => like.user == req.user.id);
    if (like.length == 0) {
      return res
        .status(400)
        .send([{ msg: "you didn't like already this post " }]);
    }

    post.like.pop({ user: req.user.id });
    await post.save();
    res.send(post.like);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/post/me *get a post *private
router.get("/me", auth, async (req, res) => {
  try {
    const post = await Posts.find({ user: req.user.id }).sort({ date: -1 });
    res.send(post);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/post/all *get all post *private
router.get("/all", auth, async (req, res) => {
  try {
    const postRemove = await Posts.find()
      .populate("user", "img")
      .sort({ date: -1 });

    res.send(postRemove);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/post/id *get post of post *private
router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    const postProf = await Posts.find({ user: id })
      .populate("user", "img")
      .sort({ date: -1 });

    res.send(postProf);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

router.post("/paginate", auth, async (req, res) => {
  const { page, limit } = req.body;
  try {
    const option = {
      page,
      limit,
      populate: { path: "user", select: "name" },
      lean: true,
      sort: {
        date: -1,
      },
    };

    let post = await Posts.paginate({}, option);

    res.send(post);
  } catch (err) {
    res.status(500).send([{ msg: "server errror" }]);
  }
});

module.exports = router;
