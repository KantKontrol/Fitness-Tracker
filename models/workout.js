

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Excersize type required"
            },
            name: {
                type: String,
                required: "Name of Excersize is required"
            },
            duration: {
                type: Number,
                required: "Duration in minutes is required"
            },
            weight: {
              type: Number 
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;