import { Request, Response } from "express";

export const getUserDepartment = async (req: Request, res: Response) => {
  try {
    const { ipUserID } = req.body;

    if (ipUserID === "requestor1@kube.com") {
      return res.status(200).json({
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

    return res.status(200).json({
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
};
