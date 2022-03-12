const express = require("express");
const Blogs = require("./blog-model");

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  Blog.addBlog(data)
    .then((blogs) => {
      res.status(200).json({ data: blogs });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add", error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Blogs.updateBlog(id, changes)
    .then((blogs) => {
      if (blogs) {
        res.status(200).json({ blogs });
      } else {
        res.status(404).json({ error: "please provide right information" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "There was an error updating", error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Blogs.removeBlog(id)
    .then((blogs) => {
      if (blogs) {
        res.status(200).json({ data: blogs, message: "blog deleted" });
      } else {
        res.status(404).json({ error: "please provide correct id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Blogs.getBlogById(id)
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Blogs.getBlogs()
    .then((blogs) => {
      res.status(200).json({ data: blogs });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not fetch blogs", error: err.message });
    });
});

module.exports = router;
