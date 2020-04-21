const express = require("express");
const mongoose = require("mongoose");


const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


//Routes here
require("./routes/htmlRoutes")(server);
require("./routes/apiRoutes")(server);




server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});