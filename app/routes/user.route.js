const router = require("express").Router();
const users = require("../controllers/user.controller");

module.exports = (app) => {
  router.get("/all/:tenantId?", users.all);
  router.get("/:pageNumber/:keyword?", users.listing);
  router.post("/", users.add);
  router.put("/:id", users.update);

  app.use("/api/users", router);
};
