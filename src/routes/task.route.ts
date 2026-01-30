import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  getTasksController,
  updateTaskController,
} from "../controllers/task.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.post("/task", protect, createTaskController);
router.get("/task", getTasksController);
router.post("/task/:id", protect, updateTaskController);
router.post("/task/:id", protect, deleteTaskController);

export default router;
