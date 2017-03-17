var express = require('express');
var router = express.Router();
var connection = require('../database');

router.post('/', function(req, res) {
 let issue = req.body;
 let row = {
    user_id: 0, 
    lat: issue.location.lat,
    lng: issue.location.lng,
    type: issue.type,
    status: 'Reported'
 };
 console.log('==================================>',row);
  connection.query('INSERT INTO reported_issues SET ?', row, function (err, result) {
   if (err) console.log(err);
   res.sendStatus(201).end();
  });
});

router.get('/', function (req, res) {
  connection.query('SELECT * FROM reported_issues', function(err, result) {
    if (err) console.log(err);
    var trans = result.map(el => {
      el.location = {
        lat: el.lat, lng:el.lng
      };
      delete el.lat;
      delete el.lng;
      return el;
    });
    res.send(trans);
  });
});

router.get('/trash', function (req, res) {
  connection.query('SELECT * FROM reported_issues WHERE type = "Trash"', function(err, result) {
    if (err) console.log(err);
    // console.log(result);
    var trans = result.map(el => {
      el.location = {
        lat: el.lat, lng:el.lng
      };
      delete el.lat;
      delete el.lng;
      return el;
    });
    res.send(trans);
  });
});

router.get('/roadwork', function (req, res) {
  connection.query('SELECT * FROM reported_issues WHERE type = "Road Work"', function(err, result) {
    if (err) console.log(err);
    // console.log(result);
    var trans = result.map(el => {
      el.location = {
        lat: el.lat, lng:el.lng
      };
      delete el.lat;
      delete el.lng;
      return el;
    });
    res.send(trans);
  });
});

router.get('/traffic_sign', function (req, res) {
  connection.query('SELECT * FROM reported_issues WHERE type = "Traffic Sign"', function(err, result) {
    if (err) console.log(err);
    // console.log(result);
    var trans = result.map(el => {
      el.location = {
        lat: el.lat, lng:el.lng
      };
      delete el.lat;
      delete el.lng;
      return el;
    });
    res.send(trans);
  });
});

module.exports = router;