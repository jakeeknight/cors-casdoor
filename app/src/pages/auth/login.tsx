import LoginForm from "@/components/auth/LoginForm"
import AuthLayout from "@/components/layouts/AuthLayout"
import { EAuthRouteType } from "@/types/auth"

export default function Login() {
  return (
    <AuthLayout type={EAuthRouteType.LOGIN}>
      <LoginForm />
    </AuthLayout>
  )
}
