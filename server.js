const express = require("express");


const server = express();
const PORT = process.env.PORT || 8080;


server.use(express.json());
server.use(express.urlencoded({extended: true}));


//Routes here
require("./routes/htmlRoutes")(server);
require("./routes/apiRoutes")(server);




server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});