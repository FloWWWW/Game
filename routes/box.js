/**
 * Created by florencewu on 7/4/2016.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('inti box');
});

module.exports = router;