var express = require('express');
var router = express.Router();

// To connect db
var mysql  = require('mysql');
var conf = require('../conf').get(process.env.NODE_ENV);
var pool = mysql.createPool(conf.db.local_connection);

var logAndRespond = (err,res,status) => {
    console.error(err);
    res.statusCode = ('undefined' === typeof status ? 500 : status);
    res.send({
        result: 'error',
        err:    err.code
    });
};

//////////////////////////////////
// Post CRUD
// Create
router.post('/post/add', (req,res) => {
  // console.log(req.body)

  pool.getConnection((err, connection) => {
  	var insertQuery = 'insert into posts set ?';
    var query = connection.query(insertQuery, [req.body], (err,rows) => {
      if (err) {
          console.error(err);
          throw err;
      }
      res.statusCode = 202; // accepted
      var msg = JSON.stringify({
          result: 'Insert success',
          err:    '',
          json:   req.body,
          length: rows.length
      });
      res.end(msg);
      console.log(msg);
      connection.release();
    });
  });
});
//Read
router.get('/post', (req, res) => {
  pool.getConnection((err, connection)=>{
    connection.query('SELECT * FROM posts', (err, rows) => {
      if (err){ logAndRespond(err,res); return; }
      if (rows.length === 0){ res.send(204); return; }

      var msg = {
          result: 'Get success',
          err:    '',
          json:   rows,
          length: rows.length
      };
      // console.log(conf)
      res.json(msg);
    });
    connection.release();
  });
});
//Update
router.post('/post/edit/:id', (req,res) => {
  pool.getConnection((err, connection) => {
  	var updateQuery = 'UPDATE posts SET ? WHERE id = ?';

    var query = connection.query(
    	updateQuery, [req.body, req.params.id], (err,rows)  => {
	      if (err) {
	          console.error(err);
	          throw err;
	      }
	      res.statusCode = 202; // accepted
	      var msg = JSON.stringify({
	          result: 'Update success',
	          json: req.body
	      });
	      res.send(msg);
	      console.log(msg);
	    });
	    connection.release();
  });
});
//Delete
router.get('/post/delete/:id', (req, res) =>  {
  pool.getConnection((err, connection)=>{
  	var deleteQuery = 'DELETE FROM posts WHERE id=?';
    connection.query(deleteQuery,[req.params.id], (err, rows) => {
      if (err){ logAndRespond(err,res); return; }
      if (rows.length === 0){ res.send(204); return; }

      var msg = JSON.stringify({
          result: 'Delete success',
          err:    '',
      });
      res.send(msg);
    });
    connection.release();
  });
});


module.exports = router;
