const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect(
    );

const app = express();
app.use(bodyparser.json());

app.use("/posts", require("./routes/post"));

app.get("/", (req, res) => {
    res.send({ Project: "MERN CRUD app" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);