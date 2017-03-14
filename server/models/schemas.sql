DROP DATABASE naberle;

CREATE DATABASE naberle;

USE naberle;


CREATE TABLE reported_issues (
  user_id INT UNSIGNED NOT NULL,
  location VARCHAR(100) NOT NULL,
  type ENUM ('type_1', 'type_2', 'type_3', 'type_4', 'type_5'),
  status ENUM ('stat_1', 'stat_2', 'stat_3', 'stat_4'),
	rep_issue_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);



CREATE TABLE users (
  username VARCHAR (20),
  password VARCHAR (20),
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);


CREATE TABLE votes (
  rep_issue_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  vote_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);








