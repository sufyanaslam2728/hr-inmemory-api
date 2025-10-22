import express from "express";
import Router from "./routes/v1/taskRoute"; // these are routes

// taskRoutes

const app = express();

app.use(express.json());

app.use("/api/v1", Router);

export default app;
