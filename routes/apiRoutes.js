const db = require("../models");
const mongojs = require("mongojs");

module.exports = function(server){


    server.get("/api/workouts", (req, res) => {
        db.Workout.find({}, data => {


            res.json(data);
        }); 
    });

    server.put("/api/workouts/:id", ({ body }, res) => {

        db.Workout.create({
            day: 
        })

    });


    server.get("/excersize/:id", (req, res) => {

        let id = req.params.id;

        db.Workout.find({
            __id: mongojs.ObjectId(id)
        }, data => {


            res.json(data);
        }); 
    });


}