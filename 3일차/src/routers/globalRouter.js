import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", function (req, res) {
  return res.send("<h1>Home<h1>");
});
globalRouter.get("/trending", function (req, res) {
  return res.send("<h1>Trending<h1>");
});
globalRouter.get("/new", function (req, res) {
  return res.send("<h1>New Page<h1>");
});
globalRouter.get("/Join", function (req, res) {
  return res.send("<h1>Join<h1>");
});
globalRouter.get("/Login", function (req, res) {
  return res.send("<h1>Login<h1>");
});

export default globalRouter;
