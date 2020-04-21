const db = require("../models");


module.exports = function(server){


    server.get("/api/workouts", (req, res) => {
        db.Workout.find({}, data => {
            res.json(data);
        }); 
    });

    server.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
    });

    server.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, data => {
            console.log(data);
            res.json(data);
        }); 
    });

    server.put("/api/workouts/:id", (req , res) => {

        let id = req.params.id;
        let excersizeData = req.body;

        db.Workout.update({ __id: id}, { $push: { excersize: excersizeData}}, updatedWorkout => {


            res.json(updatedWorkout);
        });

    });







}