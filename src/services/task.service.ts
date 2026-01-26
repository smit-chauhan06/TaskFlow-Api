import Task from "../models/test.model";
import { ApiError } from "../utils/ApiError";
import mongoose from "mongoose";

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

export const updateTask = async (
  id: string,
  data: { title?: string; completed?: boolean },
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Inavlid Task ID");
  }

  const task = await Task.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return task;
};

export const deleteTask = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid task ID");
  }

  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return task;
};
