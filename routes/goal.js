const express = require("express");
const goalRoute = express.Router();
const Goal = require("../models/goal");


goalRoute.get("/", (req, res) => {
    Goal.find((err, goals) => {
        if (err) return res.status(500).send(err);
        return res.send(goals);
    });
});

goalRoute.post("/", (req, res) => {
    const newGoal = new Goal(req.body);
    newGoal.save((err, savedGoal) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(savedGoal);
    });
});

goalRoute.get("/:id", (req, res) => {
    Goal.findById(req.params.id, (err, goal) => {
        if (err) return res.status(500).send(err);
        return res.send(goal);
    });
});

goalRoute.put("/:id", (req, res) => {
    Goal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGoal) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedGoal);
    });
});

goalRoute.delete("/:id", (req, res) => {
    Goal.findByIdAndRemove(req.params.id, (err, deletedGoal) => {
        if (err) return res.statusCode(500).send(err);
        return res.send(deletedGoal);
    });
});

module.exports = goalRoute;