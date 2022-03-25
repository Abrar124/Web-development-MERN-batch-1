const express = require("express");
const cors = require("cors");
const configDatabase = require("./configurations/database.js");
const todo = require("./routes/todo.routes.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

configDatabase();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));
app.get("/", (req, res) =>
  res.send("Hello there!! Cheers !! The server is up and running")
);

app.use("/api/todoapp", todo);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
