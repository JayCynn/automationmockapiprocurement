import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import orderRoutes from "./routes/order.routes";
import fileRoutes from "./routes/file.routes";
import userDeptRoutes from "./routes/user-dept.routes";
import { Request, Response } from "express";

const app = express();

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
    credentials: true,
  })
);

app.use(compression());
app.use(express.json({ limit: "50mb" })); // Increased limit for base64 file uploads

// Basic route for health check
app.get("/", (req: Request, res: Response) => {
  res.json({ status: "API is running" });
});

// Swagger UI with no authentication
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);

// Routes - no authentication middleware
app.use("/", orderRoutes);
app.use("/", fileRoutes);
app.use("/", userDeptRoutes);

// Order Creation API
app.post("/edms/OrderCreation/MY/:company", (req: Request, res: Response) => {
  try {
    const orderData = req.body.orderCreation;
    const response = {
      response: {
        orderCreationResponse: {
          result: "Success",
          pONumber: "415562",
          pONoStatus:
            orderData.tporderStatus === "CREATE"
              ? "Raised"
              : orderData.tporderStatus === "MODIFY"
              ? "Amended"
              : orderData.tporderStatus === "CANCEL"
              ? "Cancelled"
              : "Raised",
          pOPdf: `${orderData.tpvendorName}-415562.pdf`,
          opResp:
            orderData.tporderStatus === "CREATE"
              ? "PO created successfully in GDMS"
              : orderData.tporderStatus === "MODIFY"
              ? "PO amended successfully in GDMS"
              : orderData.tporderStatus === "CANCEL"
              ? "PO cancelled successfully in GDMS"
              : "PO created successfully in GDMS",
          opRespCode: "200",
          opIsSuccess: "True",
        },
      },
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// File Upload API
app.post(
  "/api/util/kubeops/submission/v2/uploadSubmissionFileBase64",
  (req: Request, res: Response) => {
    try {
      res.json({
        response: {
          statusId: "200",
          responseData: "True",
          success: "True",
        },
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// File Content Validation API
app.post(
  "/procu-utils/validate-file-content",
  (req: Request, res: Response) => {
    try {
      const { base64FileData } = req.body;
      const isEmpty = !base64FileData || base64FileData.trim() === "";
      res.json({
        response: {
          validateIsFileEmptyResponse: isEmpty ? "True" : "False",
        },
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// String Concatenation API
app.post("/procu-utils/concat-strings", (req: Request, res: Response) => {
  try {
    const { VendorName, PONo } = req.body;
    res.json({
      response: {
        concatResponse: `${VendorName}-${PONo}.pdf`,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DateTime API
app.post("/procu-utils/getDateTime", (req: Request, res: Response) => {
  try {
    const now = new Date();
    const formattedDateTime = now
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "");

    res.json({
      response: {
        dateTime: formattedDateTime,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// User Department API
app.post("/edms/UserPODept/MY", (req: Request, res: Response) => {
  try {
    const { ipUserID } = req.body;
    if (ipUserID === "requestor1@kube.com") {
      res.json({
        response: {
          data: [
            {
              deptcode: "D01",
              deptname: "Ara Damansara Sales",
              depttype: "Sales",
            },
            {
              deptcode: "D02",
              deptname: "Sungai Besi Sales",
              depttype: "Sales",
            },
            {
              deptcode: "D03",
              deptname: "Johor Bahru Sales",
              depttype: "Sales",
            },
            {
              deptcode: "D04",
              deptname: "Penang Sales",
              depttype: "Sales",
            },
          ],
        },
      });
    } else {
      res.json({
        response: {
          data: [],
        },
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

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

// Handle 404 errors
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested endpoint does not exist",
  });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(
      `Swagger documentation is available at http://localhost:${PORT}/api-docs`
    );
  });
}

// For Vercel
export default app;
