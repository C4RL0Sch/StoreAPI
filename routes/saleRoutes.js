const express = require("express");
const router = express.Router();
const SaleController = require("../controllers/SaleController");

router.get("/", SaleController.list);
router.post("/", SaleController.create);

module.exports = router;