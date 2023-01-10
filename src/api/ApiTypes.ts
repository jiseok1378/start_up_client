export interface SignupDto {
  userId: string;
  password: string;
  name: string;
  email: string;
  registerType: number;
  registerNumber: string;
}
export interface SigninDto {
  userId: string;
  password: string;
}
export interface SigninResDto {
  accessToken: string;
  expirationDate: string;
  userName: string;
}
