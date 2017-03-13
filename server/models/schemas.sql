CREATE DATABASE naberle;
USE naberle;


-- NOTE: setting column values as NOT NULL allows the tables 
-- to take care of forcing the user to fill in all fields corretly
-- where we can return an 'error' if it has no value during the post request;

-- NOTE: use "NOW()" to insert a value in a timestamp column if we want to have timestamps;
CREATE TABLE reported_issues (
  user_id INT UNSIGNED NOT NULL,
  location VARCHAR(100) NOT NULL,
  type ENUM ('type_1', 'type_2', 'type_3', 'type_4', 'type_5'),
  status ENUM ('stat_1', 'stat_2', 'stat_3', 'stat_4'),
  -- time_reported TIMESTAMP,
	rep_issue_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY;
);



CREATE TABLE users (
  username VARCHAR (20),
  password VARCHAR (20),
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY;
);



-- NOTE: "PRIMARY KEY (rep_issue_id, time_voted)" in the votes TABLE 
-- takes care of creating a key that is unique to each voting instance, 
-- and simplifies the search for whether a user already voted for an issue. 
CREATE TABLE votes (
  rep_issue_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  -- time_voted TIMESTAMP,
  PRIMARY KEY (rep_issue_id, time_voted) 
);








