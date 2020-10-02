const express = require("express");
const app = express();
const PORT = process.env.PORT || 3010;
//route
app.get("/", (req, res) => {
  res.send("<h1>This is Home Page route</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>This is about Page</h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>404! Page Not Found</h1>");
});
app.listen(PORT, () => {
  console.log(`Running on port : ${PORT}`);
});
