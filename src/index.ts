import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import orderRoutes from "./routes/order.routes";
import fileRoutes from "./routes/file.routes";
import userDeptRoutes from "./routes/user-dept.routes";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "50mb" })); // Increased limit for base64 file uploads

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/", orderRoutes);
app.use("/", fileRoutes);
app.use("/", userDeptRoutes);

// Error handling
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({
      response: {
        result: "Error",
        opResp: "Internal server error",
        opRespCode: "500",
        opIsSuccess: "False",
      },
    });
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Swagger documentation is available at http://localhost:${PORT}/api-docs`
  );
});
