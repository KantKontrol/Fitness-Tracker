

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let workoutSchema = new Schema({

    day: {
        type: Date
    },
    excersizes: [
        {
            type: String,
            name: String,
            duration: Int16Array,
            weight: Int16Array,
            reps: Int16Array,
            sets: Int16Array
        }
    ]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;