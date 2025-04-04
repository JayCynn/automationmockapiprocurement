import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "API is running" });
});

// Order Creation API
app.post(
  "/edms/OrderCreation/:country/:company",
  (req: Request, res: Response) => {
    try {
      const { country, company } = req.params;
      const { orderStatus } = req.body;

      const response = {
        status: orderStatus === "SUCCESS" ? "SUCCESS" : "FAILED",
        message:
          orderStatus === "SUCCESS"
            ? "Order created successfully"
            : "Failed to create order",
        data: {
          orderId: "MOCK-ORDER-123",
          timestamp: new Date().toISOString(),
          country,
          company,
        },
      };

      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// File Upload API
app.post(
  "/api/util/kubeops/submission/v2/uploadSubmissionFileBase64",
  (req: Request, res: Response) => {
    try {
      const { fileName, fileData } = req.body;

      res.json({
        status: "SUCCESS",
        message: "File uploaded successfully",
        data: {
          fileId: "MOCK-FILE-123",
          fileName,
          uploadTime: new Date().toISOString(),
        },
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// File Content Validation API
app.post(
  "/api/util/kubeops/submission/v2/validateFileContentBase64",
  (req: Request, res: Response) => {
    try {
      const { fileData } = req.body;
      const isEmpty = !fileData || fileData.trim() === "";

      res.json({
        status: isEmpty ? "FAILED" : "SUCCESS",
        message: isEmpty ? "File content is empty" : "File content is valid",
        data: {
          isValid: !isEmpty,
          validationTime: new Date().toISOString(),
        },
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// String Concatenation API
app.post("/api/util/string/concat", (req: Request, res: Response) => {
  try {
    const { vendorName, poNumber } = req.body;
    const pdfFileName = `${vendorName}_${poNumber}.pdf`;

    res.json({
      status: "SUCCESS",
      data: {
        pdfFileName,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DateTime API
app.get("/api/util/datetime", (req: Request, res: Response) => {
  try {
    const now = new Date();
    const formattedDate = now.toISOString().replace("T", " ").split(".")[0];

    res.json({
      status: "SUCCESS",
      data: {
        currentDateTime: formattedDate,
        timestamp: now.getTime(),
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// User Department API
app.post("/edms/UserPODept/:country", (req: Request, res: Response) => {
  try {
    const { country } = req.params;
    const { userId } = req.body;

    res.json({
      status: "SUCCESS",
      data: {
        userId,
        country,
        department: "MOCK-DEPT-123",
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
