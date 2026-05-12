const mysql = require("mysql2");

const db = mysql.createConnection({
  uri: process.env.DATABASE_URL
});

db.connect((err) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;