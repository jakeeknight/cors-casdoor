export function getToken(): string | null {
  const token = localStorage.getItem("sb-localhost-auth-token")
  if (!token) {
    return null
  }

  return JSON.parse(token).access_token
}
