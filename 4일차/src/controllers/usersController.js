export const join = (req, res) => {
    return res.render("join", { pageTitle: "join" });
  };
  export const login = (req, res) => {
    return res.render("login", { pageTitle: "login" });
  };
  export const seeUsers = (req, res) => {
    return res.render("seeUsers", { pageTitle: "seeUsers" });
  };
  export const seeUser = (req, res) => {
    return res.render("seeUser", { pageTitle: "seeUser" });
  };
  export const editProfile = (req, res) => {
    return res.render("editProfile", { pageTitle: "editProfile" });
  };
  