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

//------ Get specific project actions------//
router.get("/actions/:id", (req, res) => {
  Project.getProjectActions(req.params.id)
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
});

//--------Post New Project-----//
router.post("/", (req, res) => {
  Project.insert(req.body)
    .then(newRes => res.status(201).json(newRes))
    .catch(err => res.status(500).json(err));
});

//------Update Project w/ specific ID------//
router.put("/:id", (req, res) => {
  Project.update(req.params.id, req.body)
    .then(newRes => {
      if (newRes) {
        res.status(201).json(newRes);
      } else {
        res
          .status(400)
          .json({
            errMessage: "the project you tried to update doesn't exist"
          });
      }
    })
    .catch(err => res.status(500).json(err));
});

//-------- Delete Project w/ specific ID------//
router.delete("/:id", (req, res) => {
  Project.remove(req.params.id)
    .then(r => res.status(200).json({ message: "Success deleting Project" }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
