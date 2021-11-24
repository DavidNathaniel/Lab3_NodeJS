const express = require("express");
//creating app
const app = express();
//make the app listen on port
//send an HTTP response when receiving HTTP GET /
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/catalogue", (req, res) => {
  res.render("catalogue");
});
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

//pass requests to the router middleware
const router = require("./apis/routes");
app.use(router);
