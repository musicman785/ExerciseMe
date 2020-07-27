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

//====================================
module.exports = router;
