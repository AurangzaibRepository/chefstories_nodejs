const router = require("express").Router();
const currencies = require("../controllers/currency.controller");

module.exports = (app) => {
  router.get("/all/:tenantId", currencies.all);
  router.get("/listing/:pageNumber/:keyword?", currencies.listing);
  router.get("/:id", currencies.get);
  router.post("/", currencies.add);
  router.put("/:id", currencies.update);

  app.use("/api/currencies", router);
};
