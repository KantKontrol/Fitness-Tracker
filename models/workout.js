

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },
    excersizes: [
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
              type: Number,
              default: 0 
            },
            reps: {
                type: Number,
                default: 0 
            },
            sets: {
                type: Number,
                default: 0 
            }
        }
    ]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;