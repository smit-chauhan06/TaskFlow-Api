import { Router } from "express";
import { createTaskController, getTasksController } from "../controllers/task";

const router = Router();

router.post("/task", createTaskController);
router.get("/task", getTasksController);

export default router;
