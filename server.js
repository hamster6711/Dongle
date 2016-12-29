'use strict'

var express = require('express');
var path = require('path');

var app = express();

var quizRoutes = require('./routes/quizes');

// Get the index page:
app.get('/', function(req, res) {
	var data = {};
	res.render("main", data);
});


// quiz
app.get('/quiz/nextVocab', quizRoutes.next);
app.post('/quiz', quizRoutes.check);

app.listen(3000);
console.log('Listening on port 3000...');
