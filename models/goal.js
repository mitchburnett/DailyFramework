const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    principle: {
        type: String,
        required: false
    },
    goal: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    progress: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Goal", goalSchema);