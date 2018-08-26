export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthState {
  user?: User;
  authError: string;
}