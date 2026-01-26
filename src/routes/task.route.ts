import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  getTasksController,
  updateTaskController,
} from "../controllers/task.controller";

const router = Router();

router.post("/task", createTaskController);
router.get("/task", getTasksController);
router.post("/task/:id", updateTaskController);
router.post("/task/:id", deleteTaskController);

export default router;
