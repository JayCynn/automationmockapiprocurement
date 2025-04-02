export interface UserDeptRequest {
  ipUserID: string;
}

export interface Department {
  deptcode: string;
  deptname: string;
  depttype: string;
}

export interface UserDeptResponse {
  response: {
    data: Department[];
  };
}
