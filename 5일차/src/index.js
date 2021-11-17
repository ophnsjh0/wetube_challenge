import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

const PORT = 5003;

const handleListening = () => console.log(`🆗 Server listenting on port http://localhost:${PORT}`);
// Codesanbox does not need PORT :)
app.listen(PORT, handleListening);
