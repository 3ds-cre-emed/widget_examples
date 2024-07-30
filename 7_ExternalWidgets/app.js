const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/mywidget", express.static(path.join(__dirname, "widget")));
app.get("/mywidget", async (req, res) => {
  res.status(200).send(path.join(__dirname, "widget", "index.html"));
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
