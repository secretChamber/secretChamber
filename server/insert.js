var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'naberle'
});
connection.connect();


var test_user = {
	username: 'jaime',
	password: 'passw'
};

var query = connection.query('insert into users set ?', test_user, function (err, result) {
  if (err) console.log(err); 
  console.log(result);
});