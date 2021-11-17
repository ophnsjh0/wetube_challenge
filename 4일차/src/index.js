import express from "express";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);


const PORT = 5001;

const handleListening = () => console.log(`🆗 Server listenting on port http://localhost:${PORT}`);
// Codesanbox does not need PORT :)
app.listen(PORT, handleListening);
