import Task from "../models/test";
import { ApiError } from "../utils/ApiError";

export const createTask = async (title: string) => {
  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  const task = await Task.create({ title });
  return task;
};

export const getAllTasks = async () => {
  return await Task.find();
};
