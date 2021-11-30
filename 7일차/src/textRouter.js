import express from "express";
import { upload, readText } from "./textController";
import { uploadText } from "./middleware";

const textRouter = express.Router();

textRouter.get("/", upload);
textRouter.route("/read").post(uploadText.single("text"), readText);

export default textRouter;
