const express = require("express");

const router = express.Router();

const Actions = require("../data/helpers/actionModel");

//------- Get All Actions------//
router.get("/", (req, res) => {
  Actions.get()
    .then(all => res.status(200).json(all))
    .catch(err => res.status(404).json(err));
});

//------Get A Specific action by ID------//
router.get("/:id", (req, res) => {
  Actions.get(req.params.id)
    .then(all => res.status(200).json(all))
    .catch(err => res.status(404).json(err));
});

//-----Post New Action-----//
router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then(newRes => res.status(201).json(newRes))
    .catch(err => res.status(500).json(err));
});

//----- Update an Action-----//
router.put("/:id", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(newRes => {
      if (newRes) {
        res.status(201).json(newRes);
      } else {
        res
          .status(400)
          .json({ errMessage: "the project you tried to update dosnt exist" });
      }
    })
    .catch(err => res.status(500).json(err));
});

//------Delete an Action-----//
router.delete("/:id", (req, res) => {
  Actions.remove(req.params.id)
    .then(r => res.status(200).json({ message: "success deleting resource" }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
