var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'naberle'
});
connection.connect();

var query = connection.query('select * from users', function(err, result) {
	if (err) console.log(err);
	console.log(result);
});
