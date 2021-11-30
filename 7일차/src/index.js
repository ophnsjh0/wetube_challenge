import express from "express";
import path from "path";
import bodyParser from "body-parser";
import textRouter from "./textRouter";
// import multer from "multer";
// import fs from "fs";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", textRouter);

// Codesanbox does not need PORT :)
app.listen(4500, () => console.log(`Listening!`));
