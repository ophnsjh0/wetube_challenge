import express from "express";

const PORT = 4000;
const app = express();

app.get("/", (req, res, next) => {
  return res.send("Root");
});
app.get("/about", (req, res, next) => {
  return res.send("About");
});
app.get("/contact", (req, res, next) => {
  return res.send("Contact");
});
app.get("/login", (req, res, next) => {
  return res.send("Login");
});

const handleListening = () =>
  console.log(`👍 Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
