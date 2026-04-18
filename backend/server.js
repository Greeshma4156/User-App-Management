import exp from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserApp } from "./APIs/UserAPI.js";
import cors from "cors";

dotenv.config();

const app = exp();

//  Allow both local + deployed frontend
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://user-app-management-qjjm.onrender.com"  ]
}));

app.use(exp.json());

// Routes
app.use("/user-api", UserApp);

//  Connect to DB and start server
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Connected to DB");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });

  } catch (err) {
    console.log(" DB connection error:", err);
  }
}

connectDB();

// Error handling
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "Validation failed", errors: err.errors });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: "Duplicate field value" });
  }
  res.status(500).json({ message: "Internal Server Error" });
});