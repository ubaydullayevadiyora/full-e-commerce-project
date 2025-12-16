export interface GetUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface GetOneUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UpdateUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface DeleteUser {}
