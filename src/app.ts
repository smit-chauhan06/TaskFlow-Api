import express, { NextFunction, Request, Response } from "express";
import taskRoutes from "./routes/task";
import { errorHandler } from "./middlewares/error";

const app = express();

// Global middleware
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/v1", taskRoutes);

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Server is running",
  });
});

// Global error handler (always last)
app.use(errorHandler);

export default app;
