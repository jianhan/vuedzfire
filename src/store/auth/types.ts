export interface User {
  displayName: string;
  email: string;
  photoURL: string;
}

export interface AuthState {
  user?: User;
  authError: string;
}