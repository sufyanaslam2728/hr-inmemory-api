import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../../controller/taskController";
import authToken from "../../middleware/auth";
import {
  ValidateIdInt,
  ValidateCreateTask,
  ValidateUpdateTask,
} from "../../middleware/dataValidation";

const taskRoute = express.Router();

// Create a new Task
taskRoute.post("/task", authToken, ValidateCreateTask, createTask);
// Retrieve a task by its ID
taskRoute.get("/task/:id", authToken, ValidateIdInt, getTaskById);
// // Update a specific task
taskRoute.put(
  "/task/:id",
  authToken,
  ValidateIdInt,
  ValidateUpdateTask,
  updateTask
);
// // Delete a specific task
taskRoute.delete("/task/:id", authToken, ValidateIdInt, deleteTask);
// Retrieve all tasks
taskRoute.get("/tasks", authToken, getAllTasks);

export default taskRoute;
