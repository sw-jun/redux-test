var express = require('express');
var router = express.Router();

// To connect db
var mysql  = require('mysql');
var conf = require('../conf').get(process.env.NODE_ENV);
var pool = mysql.createPool(conf.db.local_connection);

var logAndRespond = function logAndRespond(err,res,status){
    console.error(err);
    res.statusCode = ('undefined' === typeof status ? 500 : status);
    res.send({
        result: 'error',
        err:    err.code
    });
};

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_mido', 'laon', 'ruddls88!',{
  host:'125.133.211.143',
  port:3300,
  dialect: 'mysql',
});

const Posts = sequelize.define('posts', {
  user_no: {
    type: Sequelize.INTEGER
  },
  user_name: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  bodytext: {
    type: Sequelize.STRING
  }
});


router.get('/',(req,res)=>{
  // force: true will drop the table if it already exists
  Posts.sync({force: false}).then(() => {
    // Table created
    return Posts.create({
      user_no: 1,
      user_name: 'laon',
      title: 'John',
      bodytext: 'Hancock'
    });
  });

})

//////////////////////////////////
// Post CRUD
// Create
router.post('/post/add', function(req,res){
  pool.getConnection(function(err, connection){
  	var insertQuery = 'insert into posts set ?';
    var query = connection.query(insertQuery, [req.body], function(err,rows){
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
router.get('/post', function(req, res) {
  pool.getConnection((err, connection)=>{
    connection.query('SELECT * FROM posts', function(err, rows){
      if (err){ logAndRespond(err,res); return; }
      if (rows.length === 0){ res.send(204); return; }

      var msg = JSON.stringify({
          result: 'Get success',
          err:    '',
          json:   rows,
          length: rows.length
      });
      res.end(msg);
    });
    connection.release();
  });
});
//Update
router.post('/post/edit/:id', function(req,res){
  pool.getConnection(function(err, connection){
  	var updateQuery = 'UPDATE posts SET ? WHERE id = ?';

    var query = connection.query(
    	updateQuery, [req.body, req.params.id], function(err,rows){
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
router.get('/post/delete/:id', function(req, res) {
  pool.getConnection((err, connection)=>{
  	var deleteQuery = 'DELETE FROM posts WHERE id=?';
    connection.query(deleteQuery,[req.params.id], function(err, rows){
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
