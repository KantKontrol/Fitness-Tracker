const express = require("express");


const server = express();
const PORT = process.env.PORT || 8080;


server.use(express.json());
server.use(express.urlencoded({extended: true}));


//Routes here





server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});