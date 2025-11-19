const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/dashboardController.js");

router.get("/dashboard", controller.page);

module.exports = router;