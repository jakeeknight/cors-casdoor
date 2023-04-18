import type { ApiResponse } from "./interfaces"

const apiUrl = "http://localhost:8888"

export const apiRequest = async <T, D = undefined>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: D | null,
  token?: string | null,
  altApiUrl?: string
): Promise<ApiResponse<T>> => {
  const url = `${altApiUrl ? altApiUrl : apiUrl}/${endpoint}`
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const config: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  }

  const response = await fetch(url, config)
  if (!response.ok) {
    return {
      ...response,
      error: {
        message: response.statusText,
        status: response.status,
      },
    }
  }

  return response
}
