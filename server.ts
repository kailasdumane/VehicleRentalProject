import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import vehicleRoutes from "./src/routes/vehicleRoutes";
import userRoutes from "./src/routes/userRoutes";

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/vehicle_rental")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vehicle Rental API",
      version: "1.0.0",
      description: "API for vehicle rental platform",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  // Path to the API docs
  apis: ["./src/routes/*.ts"],
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
