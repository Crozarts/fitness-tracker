const path = require("path");
const router = require("express").Router();
// comm
router.get("/", (req, res) => {
    console.log('**/**index.html route**');
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", (req, res) => {
    console.log('**/**stats.html route**');
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
    console.log('**/**exercise.html route**');
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;