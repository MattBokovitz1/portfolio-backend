const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  Projects.addProject(data)
    .then((projects) => {
      res.status(200).json({ data: projects });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add", error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Projects.updateProject(id, changes)
    .then((projects) => {
      if (projects) {
        res.status(200).json({ projects });
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

  Projects.removeProject(id)
    .then((projects) => {
      if (projects) {
        res.status(200).json({ data: projects, message: "project deleted" });
      } else {
        res.status(404).json({ error: "please provide correct id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting Project" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json({ data: projects });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not fetch projects", error: err.message });
    });
});

module.exports = router;
