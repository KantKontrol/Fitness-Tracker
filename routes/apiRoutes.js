const db = require("../models");

module.exports = function(server){


    server.get("/api/workouts", (req, res) => {
        db.Workout.find({}, data => {


            res.json(data);
        }); 
    });


}