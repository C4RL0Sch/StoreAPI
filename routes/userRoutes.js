import express from "express";
import { UserController } from "../controllers/index.js";

const router = express.Router();

router.get("/", UserController.list);
router.get("/:id", UserController.get);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.destroy);

export default router;
