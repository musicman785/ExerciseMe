const router = require("express").Router();
const Workouts = require("../models/workout.js");

// API Routes
//====================================

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .sort({ day: 1 })

    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)

    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const { body, params } = req;
  Workouts.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
//====================================
module.exports = router;
