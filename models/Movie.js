const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
    {
        timesOnList: { type: Number, default: 0 }, // increment every time this movie gets added to a list
        timesChosen: { type: Number, default: 0 }, // increment every time this movie gets chosen as a final result
        timdbid: { type: Number, default: null }, // The Movie DB's internal id reference number
        // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, TODO:: COMMENT IN, ONCE USERS ARE IMPLEMENTED
    },
    { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
