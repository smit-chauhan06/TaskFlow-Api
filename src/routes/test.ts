import { Request, Response, Router } from "express";
import Task from "../models/test";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

const router = Router();

//GET test
router.get("/test", (req: Request, res: Response) => {
  console.log("🚀 ~ req:", req);
  res.status(200).json({
    message: "Test route is working",
  });
});

//POST test
router.post("/test", (req: Request, res: Response) => {
  const body = req.body;

  res.status(201).json({
    message: "POST route working",
    receiveData: body,
  });
});

// Params in get Method
router.get("/test/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  res.json({
    message: "Params received",
    id,
  });
});

//Params

router.get("/search", (req: Request, res: Response) => {
  const { status, page } = req.query;

  res.json({
    messgae: "Query received",
    status,
    page,
  });
});

//Create Task
router.post(
  "/task",
  asyncHandler(async (req: Request, res: Response) => {
    const { title } = req.body;

    if (!title) {
      throw new ApiError(400, "Title is required");
    }

    const task = await Task.create({ title });

    res.status(201).json({
      success: true,
      task,
    });
  }),
);

//get all Tasks
router.get("/task", async (req: Request, res: Response) => {
  const tasks = await Task.find();

  res.json({
    message: "Task fetched",
    tasks,
  });
});

export default router;
