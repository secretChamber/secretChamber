var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'naberle'
});
connection.connect();

var getUser = connection.query('SELECT * FROM users', function(err, result) {
	if (err) console.log(err);
	console.log(result);
});

var getIssue = connection.query('SELECT * FROM reported_issues', function(err, result) {
	if (err) console.log(err);
	console.log(result);
});

var test_id = 1;

var getVotes = connection.query('SELECT COUNT (*) FROM votes WHERE rep_issue_id = ' + test_id, function(err, result) {
	if (err) console.log(err);
	console.log(result);
});
