const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "reactlogin",
});

app.post("/registration", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO logintable (name, username, password) VALUES (?,?,?)",
    [name, username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(true);
      }
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "Select * from logintable where username = ? and password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/getall", (req, res) => {
  db.getConnection((err, connection) => {
    connection.query("Select * from logintable", (err, result) => {
      connection.release();
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
