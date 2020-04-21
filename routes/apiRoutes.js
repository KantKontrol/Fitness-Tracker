const db = require("../models");


module.exports = function(server){


    server.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if(error){
                console.log("Error finding all workouts")
            }
            else
                res.json(data);
        }); 
    });

    server.post("/api/workouts", (req, res) => {
        db.Workout.create({}, (error, data) => {
            if(error){
                console.log("error creating workout");
            }
            else
                res.json(data);
        });
    });

    server.put("/api/workouts/:id", (req , res) => {

        let id = req.params.id;
        let excersizeData = req.body;
        console.log(excersizeData);
       

        db.Workout.updateOne({ _id: id}, { $push: { exercises: excersizeData }}, (error, updatedWorkout) => {
            if(error){
                console.log("error updating workout")
            }
            else{
                res.json(updatedWorkout);
            }
                
        });
    });

    server.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if(error){
                console.log("Error finding workout range")
            }
            else {
                res.json(data);
            }
                
        }); 
    });


}