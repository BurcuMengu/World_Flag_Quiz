import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db_password = process.env.DB_PASSWORD;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: db_password,
    port: "5432",
});

const app = express();
const port = 3000;

db.connect();

let quiz = [];

db.query("SELECT * FROM flags", (err, res) => {
    if(err) {
        console.log("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }
    db.end();
});

let totalCorrect = 0;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});