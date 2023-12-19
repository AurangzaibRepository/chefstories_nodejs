const router = require("express").Router();
const languages = require("../controllers/language.controller");

module.exports = (app) => {
  router.get("/all", languages.all);

  app.use("/api/languages/", router);
};
