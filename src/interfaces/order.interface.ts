export interface OrderCreation {
  tpUserID: string;
  tporderStatus: string;
  tporderNo: string;
  tporderDept: string;
  tpvendorNo: string;
  tpvendorName: string;
  pONumber: string;
  pONoStatus: string;
  pOPdf: string;
}

export interface OrderCreationResponse {
  response: {
    orderCreationResponse: {
      result: string;
      pONumber: string;
      pONoStatus: string;
      pOPdf: string;
      opResp: string;
      opRespCode: string;
      opIsSuccess: string;
    };
  };
}
