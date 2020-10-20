// Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const cors = require("cors");
require("dotenv").config();

// Environmental Variables
const PORT = Number(process.env.PORT);
const MONGODB_URI = process.env.MONGODB_URI;

// Database
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: "));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Controllers
// const userController = require("./controllers/userController");
// app.use("/api/user", userController);
const listController = require("./controllers/listController");
app.use("/api/list", listController);
const movieController = require("./controllers/movieController");
app.use("/api/movie", movieController);
const searchController = require("./controllers/searchController");
app.use("/api/search", searchController);

// Routes
app.get("*", (req, res) => {
    res.send("Endpoint Not Implemented, Please Try Again!");
});

// Listener
app.listen(PORT, () => {
    console.log(`I'm so ${PORT + 8}, you so ${PORT} and late`);
    console.log(`(RUNNING ON PORT ${PORT})`);
});
