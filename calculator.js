const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
