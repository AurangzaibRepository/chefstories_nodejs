const router = require("express").Router();
const languages = require("../controllers/language.controller");

module.exports = (app) => {
  router.get("/all/:tenantId", languages.all);
  router.get("/listing/:pageNumber/:tenantId/:keyword?", languages.listing);
  router.get("/:id", languages.get);
  router.post("/", languages.add);
  router.put("/:id", languages.update);

  app.use("/api/languages/", router);
};
