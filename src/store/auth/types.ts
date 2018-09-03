export interface User {
  uid: string,
  displayName: string;
  email: string;
  photoURL: string;
  refreshToken: string;
  idToken:string;
}

export interface AuthState {
  user?: User;
  authError: string;
  showAuthDialog: boolean;
  isLoading: boolean;
}