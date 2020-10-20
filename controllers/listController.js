// Dependencies
const express = require("express");
const router = express.Router();

// Mongoose Schema
const Movie = require("../models/Movie");
const List = require("../models/List");

/*
    POST
    @desc create a new list 
*/
router.post("/", async (req, res) => {
    try {
        const newList = new List();
        const list = await newList.save();
        res.json({ msg: "creating new list", data: list });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    PUT (:id)
    @desc Update list, setting and activating the final list
    (do this as user clicks 'activate list' on a movie)
*/
router.put("/activate/:id", async (req, res) => {
    try {
        let list = await List.findByIdAndUpdate(
            req.params.id,
            {
                $set: { isActive: true, isAdding: false },
            },
            { new: true }
        );
        res.json({
            msg: "setting list to active, begin sorting",
            data: list,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    PUT (:id)
    @desc Update list with final choices and order of films
    (do this when final movie is chosen)
*/
router.put("/final/:id", async (req, res) => {
    try {
        let list = await List.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    isActive: false,
                    isAdding: false,
                    rankings: req.body.rankings,
                    result: req.body.result,
                },
            },
            { new: true }
        );
        res.json({
            msg: "finalizing list. enjoy your film!",
            data: list,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET (:id)
    @desc Get specific list by id
*/
router.get("/:id", async (req, res) => {
    try {
        const list = await List.find({ _id: req.params.id });
        res.json({ msg: `list id: ${req.params.id}`, data: list });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    GET
    @desc Get all lists
*/
router.get("/", async (req, res) => {
    try {
        const allLists = await List.find();
        res.json({ msg: "all lists", data: allLists });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/*
    DELETE (:id)
    @desc Delete specific list by id
*/
router.delete("/:id", async (req, res) => {
    try {
        const list = await List.findByIdAndRemove(req.params.id);
        res.json({ msg: "deleted list", data: list });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
