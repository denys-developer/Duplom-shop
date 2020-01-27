"use strict";
var router = require('express').Router();
router.post('/login', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});
module.exports = router;
