const express = require("express");

const Project = require("../data/helpers/projectModel");

const router = express.Router();

//-----Get All Posts------//
router.get("/", (req, res) => {
  Project.get()
    .then(all => res.status(200).json(all))
    .catch(err => res.status(404).json(err));
});

//------ Get Project by ID------//
router.get("/:id", (req, res) => {
  Project.get(req.params.id)
    .then(all => res.status(200).json(all))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
