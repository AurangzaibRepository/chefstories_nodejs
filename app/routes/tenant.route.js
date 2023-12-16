const router = require("express").Router();
const tenants = require("../controllers/tenant.controller");
const { upload } = require("../middlewares/upload.middleware");

module.exports = (app) => {
  router.get("/all", tenants.all);
  router.get("/listing/:pageNumber/:keyword?", tenants.listing);
  router.get("/:id?", tenants.get);
  router.post("/", upload("tenants").single("logo"), tenants.add);
  router.put("/:id", upload("tenants").single("logo"), tenants.update);

  app.use("/api/tenants", router);
};
