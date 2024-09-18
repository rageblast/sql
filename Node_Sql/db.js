const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Rock@3160",
  database: "Node_Sql_Database",
});

connection.end();
