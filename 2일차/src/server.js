import express from "express";

const app = express();
const happyNewYear = new Date(2021, 0, 1);
const year = happyNewYear.getFullYear();
const month = happyNewYear.getMonth() + 1;
const date = happyNewYear.getDate();

app.use((req, res, next) => {
  console.log("Path:", req.url);
  if (req.url === `/protected`) {
    return res.send("Do Not Connect this Path");
  }
  next();
});
app.use((req, res, next) => {
  console.log(
    `Time:`,
    `${year}-${month >= 10 ? month : "0" + month}-${
      date >= 10 ? date : "0" + date
    }`
  );
  next();
});
app.use((req, res, next) => {
  if (req.protocol === `https`) {
    console.log("secure : ⭕", `(${req.protocol})`);
  } else {
    console.log("Insecure: ❌", `(${req.protocol})`);
  }
  next();
});
app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(process.env.PORT, () => `Listening!✅`);
