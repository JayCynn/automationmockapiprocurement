// File Upload Interfaces
export interface FileUploadRequest {
  clientId: string;
  clientSecret: string;
  baseUrl: string;
  formId: string;
  submissionRefNo: string;
  fileUploads: {
    fieldCode: string;
    formFiles: {
      shortFileName: string;
      fullFileName: string;
      base64FileData: string;
      fileExtension: string;
    }[];
  }[];
}

export interface FileUploadResponse {
  response: {
    statusId: string;
    responseData: string;
    success: string;
  };
}

// File Content Validation Interface
export interface ValidateFileContentRequest {
  base64FileData: string;
}

export interface ValidateFileContentResponse {
  response: {
    validateIsFileEmptyResponse: string;
  };
}

// String Concatenation Interface
export interface ConcatStringsRequest {
  VendorName: string;
  PONo: string;
  IsAmended: string;
}

export interface ConcatStringsResponse {
  response: {
    concatResponse: string;
  };
}

// DateTime Interface
export interface DateTimeRequest {
  format: string;
}

export interface DateTimeResponse {
  response: {
    dateTime: string;
  };
}
