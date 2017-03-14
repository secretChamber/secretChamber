var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var 
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')))

// var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'naberle'
// });
// connection.connect();

// =======> does this look right??? <=========
// app.get('/allIssues', function(req, res) {
// 	connection.query('SELECT * FROM reported_issues', function(err, result) {
// 		if (err) console.log(err);
// 		console.log(result);
// 	});
// });

// =======> does this look right??? <=========
// app.post('/postIssue', function(req, res) {
// 	let issue = req.body;
// 	let row = {
// 		issue: issue.issue,
// 		location: {
// 			lat: issue.location.lat,
// 			lng: issue.location.lng
// 		}
// 		status: issue.status,
// 		reporter: issue.reporter
// 	};
//   connection.query('insert into reported_issues set ?', row, function (err, result) {
// 	  if (err) console.log(err);
// 	  console.log(result);
//   });
// });

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});