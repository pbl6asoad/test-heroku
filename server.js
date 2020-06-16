const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/src/index"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/src/index.html");
});
app.listen(port, () => console.log(`Example app listening on port port!`));
