import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import register from "./routes/register.js";
import login from "./routes/login.js";
import cookieJwtAuth from "./middleware/cookieJwtAuth.js";

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

const port = 3000;

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/register", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

app.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

app.get("/welcome", cookieJwtAuth, (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/welcome.html"));
});

app.post("/register", register);
app.post("/login", login);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
