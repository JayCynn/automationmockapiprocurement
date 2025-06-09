import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/", (_req: Request, res: Response) => {
  return res.json({ status: "ok", message: "API is running" });
});

// Order Creation API
app.post(
  "/gdms/OrderCreation/:country/:company",
  (req: Request, res: Response) => {
    try {
      const { orderCreation } = req.body;

      let pONoStatus: string;
      let opResp: string;

      // Determine status and response based on iporderStatus
      switch (orderCreation.iporderStatus) {
        case "CREATE":
          pONoStatus = "Raised";
          opResp = "PO created successfully in GDMS";
          break;
        case "MODIFY":
          pONoStatus = "Amended";
          opResp = "PO amended successfully in GDMS";
          break;
        case "CANCEL":
          pONoStatus = "Cancelled";
          opResp = "PO cancelled successfully in GDMS";
          break;
        default:
          return res.status(400).json({
            response: {
              orderCreationResponse: {
                result: "Failed",
                opRespCode: "400",
                opIsSuccess: "False",
              },
            },
          });
      }

      // Generate PO number (mock auto-generated number)
      const poNumber = "415562";

      // Generate pOPdf filename using vendorName and PONo
      const poPdfFilename = `${orderCreation.ipvendorName}-${poNumber}.pdf`;

      return res.json({
        response: {
          orderCreationResponse: {
            result: "Success",
            pONumber: poNumber,
            pONoStatus: pONoStatus,
            pOPdf: poPdfFilename,
            opResp: opResp,
            opRespCode: "200",
            opIsSuccess: "True",
          },
        },
      });
    } catch (error) {
      return res.status(500).json({
        response: {
          orderCreationResponse: {
            result: "Failed",
            opRespCode: "500",
            opIsSuccess: "False",
          },
        },
      });
    }
  }
);

// File Upload API
app.post(
  "/api/util/kubeops/submission/v2/uploadSubmissionFileBase64",
  (_req: Request, res: Response) => {
    try {
      return res.json({
        response: {
          statusId: "200",
          responseData: "True",
          success: "True",
        },
      });
    } catch (error) {
      return res.status(500).json({
        response: {
          statusId: "500",
          responseData: "False",
          success: "False",
        },
      });
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

      return res.json({
        response: {
          validateIsFileEmptyResponse: isEmpty ? "True" : "False",
        },
      });
    } catch (error) {
      return res.status(500).json({
        response: {
          validateIsFileEmptyResponse: "True",
        },
      });
    }
  }
);

// String Concatenation API
app.post("/procu-utils/concat-strings", (req: Request, res: Response) => {
  try {
    const { VendorName, PONo } = req.body;
    const concatResponse = `${VendorName}-${PONo}.pdf`;

    return res.json({
      response: {
        concatResponse,
      },
    });
  } catch (error) {
    return res.status(500).json({
      response: {
        concatResponse: "",
      },
    });
  }
});

// DateTime API
app.post("/procu-utils/getDateTime", (_req: Request, res: Response) => {
  try {
    const now = new Date();
    const dateTime = now.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    return res.json({
      response: {
        dateTime,
      },
    });
  } catch (error) {
    return res.status(500).json({
      response: {
        dateTime: "",
      },
    });
  }
});

// User Department API
app.post("/gdms/UserPODept/:country", (req: Request, res: Response) => {
  try {
    const { ipUserID, Company } = req.body;

    console.log(ipUserID, Company);

    if (ipUserID == "gdmsrequestor1@kube365.com" && Company == "SDAP") {
      return res.json({
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
    }

    return res.json({
      response: {
        data: [],
      },
    });
  } catch (error) {
    return res.status(500).json({
      response: {
        data: [],
        error: "Internal server error",
      },
    });
  }
});

// 404 handler
app.use((_req: Request, res: Response) => {
  return res.status(404).json({ error: "Not Found" });
});

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
