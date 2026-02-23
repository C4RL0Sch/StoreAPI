import express from "express";
import { ProductController } from "../controllers/index.js";

const router = express.Router();

router.get("/", ProductController.list);
router.get("/:id", ProductController.get);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.destroy);

export default router;
