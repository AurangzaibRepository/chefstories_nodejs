const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

// Add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Synchronize models
const db = require("./app/models");

db.sequelize.sync({ alter: true });

// Include routes
require("./app/routes/tenant.route")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
