const express = require("express");
const Books = require("./books-model");

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  Books.addBook(data)
    .then((books) => {
      res.status(200).json({ data: books });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add", error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Books.updateBook(id, changes)
    .then((book) => {
      if (book) {
        res.status(200).json({ book });
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

  Books.removeBook(id)
    .then((book) => {
      if (book) {
        res.status(200).json({ data: book, message: "book deleted" });
      } else {
        res.status(404).json({ error: "please provide correct id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting Book" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Books.getBookById(id)
    .then((book) => {
      res.status(200).json({ book });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Books.getBooks()
    .then((books) => {
      res.status(200).json({ data: books });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not fetch books", error: err.message });
    });
});

module.exports = router;
