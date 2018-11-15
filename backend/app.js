const express = require("express");
const mysql = require("mysql");
const http = require("http");

const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "transactions",
  password: "root"
});
connection.connect();
app.use("/api/v1/users/", (req, res) => {
  if (req.query.start >= 100) {
    return res.send("Records finished");
  }
  const limitPerQuery = 10;
  const query = `SELECT * from transactionTable ORDER BY ID LIMIT ${limitPerQuery} OFFSET ${
    req.query.start
  }`;
  connection.query(query, (error, results) => {
    if (error) {
      res.json({ status: 500, error: error, response: null });
      //If there is error, we send the error in the error section with 500 status
    } else {
      res.json({ status: 200, error: null, response: results });
      //If there is no error, all is good and response is 200OK.
    }
  });
});

module.exports = app;
const server = http.createServer(app);
server.listen(4001);
