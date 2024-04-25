const mysql = require("mysql");

const db = mysql.createConnection ({
  host: "uoodb.cj2u2ssq8xoa.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "rhdrhd123",
  database: "login_db"
});

db.connect();

module.exports = db