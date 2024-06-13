// Create web service
var express = require('express');
var router = express.Router();
var Comments = require('../models/comments');
var User = require('../models/user');

// Create a new comment
router.post('/new', function(req, res) {
  var comment = new Comments({
