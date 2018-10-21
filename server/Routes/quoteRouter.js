var express = require('express');
var router = express.Router();
const quoteRouter = express.Router();
quoteRouter
.get('/', function (req,res) {
    res.json(...)
})
.get('/2', function(req,res) {
    res.json(...)
})
export default quoteRouter;