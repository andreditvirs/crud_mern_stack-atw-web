const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const keys = require("./config/keys");

mongoose.connect(
    "mongodb+srv://andreditvirs:Ykl65tsL4EDXNruC@cluster0.le2fu.mongodb.net/CRUD-MERN-STACK?retryWrites=true&w=majority"
);

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/posts", require("./routes/post"));

app.get("/", (req, res) => {
    res.send({ Project: "MERN CRUD app" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);