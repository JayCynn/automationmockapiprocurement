import { Request, Response } from "express";

export const uploadSubmissionFile = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
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
};

export const validateFileContent = async (req: Request, res: Response) => {
  try {
    const { base64FileData } = req.body;
    const isEmpty = !base64FileData || base64FileData.trim() === "";

    return res.status(200).json({
      response: {
        validateIsFileEmptyResponse: isEmpty ? "True" : "False",
      },
    });
  } catch (error) {
    return res.status(500).json({
      response: {
        validateIsFileEmptyResponse: "Error",
      },
    });
  }
};

export const concatStrings = async (req: Request, res: Response) => {
  try {
    const { VendorName, PONo } = req.body;
    const concatResponse = `${VendorName}-${PONo}.pdf`;

    return res.status(200).json({
      response: {
        concatResponse,
      },
    });
  } catch (error) {
    return res.status(500).json({
      response: {
        concatResponse: "Error",
      },
    });
  }
};

export const getDateTime = async (req: Request, res: Response) => {
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

    return res.status(200).json({
      response: {
        dateTime: formattedDateTime,
      },
    });
  } catch (error) {
    return res.status(500).json({
      response: {
        dateTime: "Error",
      },
    });
  }
};
