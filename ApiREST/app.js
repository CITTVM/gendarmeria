const express = require("express");

//dependencias a utilizar

    app = express();
    bodyParser = require("body-parser");
    methodOverride = require("method-override");
    mongoose = require("mongoose");

//permitimos parsear a JSON
app.use(bodyParser.urlencoded({extended :false}));
app.use(bodyParser.json());
//implementacion y personalizacion de metodos HTTP
app.use(methodOverride());


//utilizamos enrrutador de Express
const router = express.Router();

// Peticion GET de prueba.
router.get('/',function (req, res) {
    res.send("Hello World!");
});

app.use(router);

app.listen(function () {
    console.log("Servidor corriendo en http://localhost:3000");
});
//exportamos
module.exports = app;