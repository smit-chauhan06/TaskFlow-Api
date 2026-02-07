import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  getTasksController,
  updateTaskController,
} from "../controllers/task.controller";
import { protect } from "../middlewares/auth.middleware";
import { restrictTo } from "../middlewares/role.middleware";

const router = Router();

router.post("/task", protect, createTaskController);
router.get("/task", getTasksController);
router.post("/task/:id", protect, updateTaskController);
router.post("/task/:id", protect, restrictTo("admin"), deleteTaskController);

export default router;
