import { Request, Response } from "express";
import {
  OrderCreation,
  OrderCreationResponse,
} from "../interfaces/order.interface";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: OrderCreation = req.body.orderCreation;

    // Determine response based on orderStatus
    let pONoStatus: string;
    let opResp: string;

    switch (orderData.tporderStatus) {
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
        pONoStatus = "Raised";
        opResp = "PO created successfully in GDMS";
    }

    // Generate PO Number (for demo using timestamp)
    const poNumber = `415562`; // In real implementation, this would be generated

    // Generate PDF filename
    const poPdf = `${orderData.tpvendorName}-${poNumber}.pdf`;

    const response: OrderCreationResponse = {
      response: {
        orderCreationResponse: {
          result: "Success",
          pONumber: poNumber,
          pONoStatus: pONoStatus,
          pOPdf: poPdf,
          opResp: opResp,
          opRespCode: "200",
          opIsSuccess: "True",
        },
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      response: {
        orderCreationResponse: {
          result: "Error",
          opResp: "Internal server error",
          opRespCode: "500",
          opIsSuccess: "False",
        },
      },
    });
  }
};
