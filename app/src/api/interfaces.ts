import { IAuthForm } from "@/types/auth"

export interface ApiResponse<T> extends Response {
  data?: T
  error?: ApiError
}

export interface ApiError {
  message: string
  status: number
}

export interface IHttp {
  get<T>(endpoint: string, token?: string): Promise<ApiResponse<T>>
  post<T, D>(
    endpoint: string,
    data?: D,
    token?: string
  ): Promise<ApiResponse<T>>
  put<T, D>(endpoint: string, data?: D, token?: string): Promise<ApiResponse<T>>
  delete<T>(endpoint: string, token?: string): Promise<ApiResponse<T>>
}

export interface IApi {
  health: {
    check: () => Promise<ApiResponse<any>>
  }
  auth: {
    callback: (token: string) => Promise<ApiResponse<any>>
    login: (data: IAuthForm) => Promise<ApiResponse<any>>
    register: (data: IAuthForm) => Promise<ApiResponse<any>>
    logout: () => Promise<ApiResponse<any>>
    resetPassword: (email: string) => Promise<ApiResponse<any>>
  }
}
