const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("."));

app.get("/", (req, res) => {
  res.send("HEROKU WORKS");
});

app.listen(PORT, () => {
  console.log("Started on port " + PORT);
});
