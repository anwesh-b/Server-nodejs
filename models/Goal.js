const mongoose = require("mongoose");

const GoalScheme = new mongoose.Schema({

    title: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("goals", GoalScheme);