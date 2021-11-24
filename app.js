const express = require("express");
//creating app
const app = express();
//make the app listen on port
//send an HTTP response when receiving HTTP GET /
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
