// Set up MySQL connection.
var mysql = require("mysql");
 var connection;
  

if(process.env.JAWSDB_URL){
 connection = mysql.createConnection({
  host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ouzndyjtz04qeydr",
  password: "pjmgwft1w09tsuw7",
  database: "burger_db",
  Port:  3306
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
