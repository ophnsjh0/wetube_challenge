export const home = (req, res) => {
    return res.render("home", { pageTitle: "Home" });
  };
  export const trending = (req, res) => {
    return res.render("trending", { pageTitle: "trending" });
  };
  export const newStories = (req, res) => {
    return res.render("newStories", { pageTitle: "newStories" });
  };
  export const seeStory = (req, res) => {
    return res.render("seeStory", { pageTitle: "seeStory" });
  };
  export const editStory = (req, res) => {
    return res.render("editStory", { pageTitle: "editStory" });
  };
  export const deleteStory = (req, res) => {
    return res.render("deleteStory", { pageTitle: "deleteStory" });
  };
  