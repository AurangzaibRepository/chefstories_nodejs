/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./app/middlewares/errorHandler.middleware");

const app = express();
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:3000",
};

// Add middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use("/uploads", express.static("uploads"));

// Synchronize models
const db = require("./app/models");

db.sequelize.sync({ alter: true });

// Include routes
require("./app/routes/tenant.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/currency.route")(app);
require("./app/routes/language.route")(app);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
