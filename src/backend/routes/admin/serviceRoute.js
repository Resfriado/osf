const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/serviceController.js");

router.get("/service", controller.getAll);
router.get("/service/:id", controller.getById);
router.post("/service", controller.register);

module.exports = router;