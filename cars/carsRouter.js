const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h3>in side of router</h3>')
})

module.exports = router;