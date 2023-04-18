export type IAuthForm = {
  email: string
  password: string
}

export enum EAuthRouteType {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
}
