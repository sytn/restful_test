const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Home");
});

router.get('/home', (req, res) => {
    res.send("Home");
});


module.exports = router;