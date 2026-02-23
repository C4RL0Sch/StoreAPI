import express from "express";
import { SaleController } from "../controllers/index.js";

const router = express.Router();

router.get("/", SaleController.list);
router.post("/", SaleController.create);

export default router;
