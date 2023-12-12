const router = require("express").Router();
const tenants = require("../controllers/tenant.controller");

module.exports = (app) => {
  router.get("/:pageNumber/:keyword?", tenants.listing);
  router.post("/", tenants.add);
  router.put("/:id", tenants.update);

  app.use("/api/tenants", router);
};
