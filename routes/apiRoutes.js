const router = require("express").Router();
const { Workout } = require("../models");
// commment
router.post("/api/workouts", ({ body }, res) => {
    console.log('Post api/workouts')
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log('Put api/workouts/:id')
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body} },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    console.log('Get /api/workouts')
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    console.log('Get api/workouts/range')
    Workout.find({}, (err, data) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;