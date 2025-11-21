const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/reportController.js");

router.get("/report", controller.page);

module.exports = router;