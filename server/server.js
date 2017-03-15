var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));
app.listen(PORT, function () {
  console.log('App is listening on PORT:', PORT);
});

// ====> server connection to database <====
var connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'naberle'
});

connection.connect();
// ====> end of server/DB connection <====

// =======> POSTS WORK <=========
app.post('/Issue', function(req, res) {
 let issue = req.body;
 let row = {
    user_id: 0, 
    lat: issue.location.lat,
    lng: issue.location.lng,
    type: issue.issue,
    status: issue.status
 };
  connection.query('INSERT INTO reported_issues SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

app.post('/User', function(req, res) {
  let user = req.body;
  let row = {
    username: user.username, 
    password: user.password
 };
  connection.query('INSERT INTO users SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

app.post('/Vote', function(req, res) {
 let vote = req.body;
 let row = {
  rep_issue_id: vote.issueID,
  user_id: vote.userID
 };
  connection.query('INSERT INTO votes SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});
// =======> end of POSTS <=======

// =======> GETS WORK <=========
app.get('/Issues', function(req, res) {
  connection.query('SELECT * FROM reported_issues', function(err, result) {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.get('/numberOfVotesOnIssue', (req,res) => {
  let id = req.body.FILL_ME_IN;
  connection.query('SELECT COUNT (*) FROM votes WHERE rep_issue_id = ' + FILL_ME_IN, function(err, result) {
    // if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});
// =======> end of GETS <=======