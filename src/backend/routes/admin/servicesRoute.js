const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/servicesController.js");

router.get("/services", controller.page);

module.exports = router;