// Dependencies
const express = require("express");
const axios = require("axios");
require("dotenv").config();

// from .env
const API_KEY = process.env.TMDB_API_KEY;

const router = express.Router();

/*
    GET popular
    @desc get popular results from TMDB
    @param {number} page
 */
router.get("/popular/:page", async (req, res) => {
    try {
        let url =
            "https://api.themoviedb.org/3/movie/popular?api_key=" +
            API_KEY +
            "&language=en-US&page=" +
            req.params.page +
            "&region=US";
        let apiResponse = await axios.get(url);
        res.json({ msg: "returning popular films", data: apiResponse.data });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET SIMILAR (:id)
    @desc all similar movies from db 
 */
router.get("/similar/:id", async (req, res) => {
    try {
        let url =
            "https://api.themoviedb.org/3/movie/" +
            req.params.id +
            "/similar?api_key=" +
            API_KEY +
            "&language=en-US&page=1";
        const apiResponse = await axios.get(url);
        res.json({
            msg: "returning similar films",
            data: apiResponse.data,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET (movie title)
    @desc get results from TMDB based on user input
    TODO :: MORE INPUT VALIDATION
 */
router.get("/title/:query", async (req, res) => {
    try {
        let query = req.params.query;
        let url =
            "https://api.themoviedb.org/3/search/movie?api_key=" +
            API_KEY +
            "&language=en-US&query=" +
            query +
            "&page=1&include_adult=false";
        let apiResponse = await axios.get(url);
        res.json({
            msg: `returning data based on query: ${query}`,
            data: apiResponse.data,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET (id)
    @desc get specific movie info based on input
    TODO :: MORE INPUT VALIDATION
 */
router.get("/id/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let url =
            "https://api.themoviedb.org/3/movie/" +
            id +
            "?api_key=" +
            API_KEY +
            "&language=en-US";
        let apiResponse = await axios.get(url);
        res.json({
            msg: `returning data based on id: ${id}`,
            data: apiResponse.data,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
