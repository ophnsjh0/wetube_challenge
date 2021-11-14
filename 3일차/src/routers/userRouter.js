import express from "express";

const userRouter = express.Router();

userRouter.get("/", function (req, res) {
  return res.send("<h1>Users<h1>");
});
userRouter.get("/edit-profile", function (req, res) {
  return res.send("<h1>User Edit-Profile<h1>");
});
userRouter.get("/:id", function (req, res) {
  return res.send(`<h1>User ${req.params.id}<h1>`);
});

export default userRouter;
