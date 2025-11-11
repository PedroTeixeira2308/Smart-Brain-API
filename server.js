const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const register = require("./controllers/register");
const signIn = require("./controllers/signIn");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const clarifai = require("./controllers/clarifai");



require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  // res.json({ status: 'success' });
});

app.post("/signin", (req, res) => {signIn.handleSignIn(req, res, db, bcrypt)});

app.post("/register", (req, res) => {register.handleRegister(req, res, db, bcrypt)});



app.get("/profile/:id", (req, res) => {profile.handleProfileGet(req, res, db)});

app.put("/image", (req, res) => {image.handleImage(req, res, db)});

// New api route to communicate with clarifai
app.post("/api/clarifai/face-detect", (req, res)  => {clarifai.handleClrarifai(req, res)});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
