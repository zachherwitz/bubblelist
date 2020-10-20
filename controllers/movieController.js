// Dependencies
const express = require("express");
const router = express.Router();

// Mongoose Schema
const Movie = require("../models/Movie");

/*
    POST
    @desc new movie entry based on new list 
    (first time a movie makes it to any list)
 */
router.post("/", async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const movie = await newMovie.save();
        res.json({ msg: "creating new movie entry", data: movie });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    PUT (:id)
    @desc update when movie is chosen as final result 
 */
router.put("/chosen/:id", async (req, res) => {
    try {
        // check to see if movie exists in the database
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ msg: "Movie Not Found" });
        }
        // increment the number of times chosen
        movie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                $inc: { timesChosen: 1 },
            },
            { new: true }
        );
        res.json({
            msg: "incrementing chosen property of movie",
            data: movie,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    PUT (:id)
    @desc update when movie is added to any list 
 */
router.put("/added/:id", async (req, res) => {
    try {
        // check to see if movie exists in the database
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ msg: "Movie Not Found" });
        }

        // increment the number of times chosen
        movie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                $inc: { timesOnList: 1 },
            },
            { new: true }
        );
        res.json({
            msg: "incrementing added property of movie entry",
            data: movie,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET (:id)
    @desc movie info from my db 
    (initial check to see if movie is in the database)
 */
router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.find({ _id: req.params.id });
        res.json({ msg: `movie id: ${req.params.id}`, data: movie });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET
    @desc all movie info from my db 
    (see all movies in database)
 */
router.get("/", async (req, res) => {
    try {
        const allMovies = await Movie.find();
        res.json({ msg: "all movies", data: allMovies });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
