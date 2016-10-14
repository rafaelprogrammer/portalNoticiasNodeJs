var mysql = require('mysql');
var connMysql  = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'noticias'
  });
};
module.exports = function(){
  return connMysql;
};
