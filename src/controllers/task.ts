import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import * as taskService from "../services/task";

export const createTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const task = await taskService.createTask(req.body.title);
    res.status(201).json({
      success: true,
      task,
    });
  },
);

export const getTasksController = asyncHandler(
  async (req: Request, res: Response) => {
    const tasks = await taskService.getAllTasks();
    res.json({
      success: true,
      tasks,
    });
  },
);

export const updateTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const task = await taskService.updateTask(
      req.params.id as string,
      req.body,
    );
    res.json({
      success: true,
      task,
    });
  },
);

export const deleteTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    await taskService.deleteTask(req.params.id as string);

    res.json({
      success: true,
      message: "Task deleted",
    });
  },
);
