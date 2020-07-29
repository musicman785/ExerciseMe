//Create workout schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Must Enter Exercise Type!",
      },
      name: {
        type: String,
        trim: true,
        required: "Must Enter Exercise Name!",
      },
      duration: {
        type: Number,
        required: "Enter Number Minutes!",
      },
      distance: {
        type: Number,
        required: [false, "Enter Distance!"],
      },
      weight: {
        type: Number,
        required: [false, "Enter Weight if Doing Weight Training!"],
      },
      reps: {
        type: Number,
        required: [false, "Enter Number of Reps!"],
      },
      sets: {
        type: Number,
        required: [false, "Enter Numer of Sets!"],
      },
    },
  ],
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;
