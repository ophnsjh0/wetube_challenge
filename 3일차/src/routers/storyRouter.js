import express from "express";

const storyRouter = express.Router();

storyRouter.get("/:id", function (req, res) {
  return res.send(`<h1>${req.params.id} Story<h1>`);
});
storyRouter.get("/:id/edit", function (req, res) {
  return res.send(`<h1>${req.params.id} Story Edit<h1>`);
});
storyRouter.get("/:id/delete", function (req, res) {
  return res.send(`<h1>${req.params.id} Story Delete<h1>`);
});

export default storyRouter;
