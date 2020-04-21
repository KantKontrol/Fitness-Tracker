const db = require("../models");


module.exports = function(server){


    server.get("/api/workouts", (req, res) => {
        db.Workout.find({}, data => {


            res.json(data);
        }); 
    });

    server.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, data => {

            res.json(data);
        }); 
    });

    server.put("/api/workouts/:id", ( req , res) => {

        let id = req.params.id;
        console.log(id);
        console.log(req.body);

    

    });

    server.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
    });


    server.get("/excersize/:id", (req, res) => {

        let id = req.params.id;

        db.Workout.find({
            __id: id
        }, data => {


            res.json(data);
        }); 
    });


}