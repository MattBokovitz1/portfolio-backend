const express = require("express");
const Potential = require("./potential-model");

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  Potential.addPotential(data)
    .then((potential) => {
      res.status(200).json({ data: potential });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add", error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Potential.updatePotential(id, changes)
    .then((potential) => {
      if (potential) {
        res.status(200).json({ potential });
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

  Potential.removePotential(id)
    .then((potential) => {
      if (potential) {
        res.status(200).json({ data: potential, message: "potential deleted" });
      } else {
        res.status(404).json({ error: "please provide correct id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Potential.getPotentialById(id)
    .then((potential) => {
      res.status(200).json({ potential });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Potential.getPotential()
    .then((potential) => {
      res.status(200).json({ data: potential });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not fetch potential", error: err.message });
    });
});

module.exports = router;
