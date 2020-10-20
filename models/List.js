const mongoose = require("mongoose");

const listSchema = mongoose.Schema(
    {
        initialList: { type: Array },
        result: { type: Number },
        rankings: { type: Array },
        stage: { type: String, default: "adding" }, // adding, comparing, final
        // listRating: {tyoe: Number} TODO:: Come back after implementing users
        // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, TODO:: COMMENT IN, ONCE USERS ARE IMPLEMENTED
    },
    { timestamps: true }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
