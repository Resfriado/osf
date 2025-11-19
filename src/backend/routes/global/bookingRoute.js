const express = require("express");
const router = express.Router();
const controller = require("../../controllers/global/bookingController");

router.get("/booking", controller.page);

module.exports = router;