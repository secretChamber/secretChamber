var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'naberle'
});
connection.connect();


var test_user = {
	username: 'person',
	password: 'passw'
};

var test_issue = {
	user_id: 1, 
	lat: 11.22234,
	lng: -1234.123,
	type: "Trash",
	status: "Reported"
};

var postUser = connection.query('insert into users set ?', test_user, function (err, result) {
  if (err) console.log(err); 
  console.log(result);
});

var postIssue = connection.query('insert into reported_issues set ?', test_issue, function (err, result) {
  if (err) console.log(err);
  console.log(result);
});