import RegisterForm from "@/components/auth/RegisterForm"
import AuthLayout from "@/components/layouts/AuthLayout"
import { EAuthRouteType } from "@/types/auth"

export default function Register() {
  return (
    <AuthLayout type={EAuthRouteType.REGISTER}>
      <RegisterForm />
    </AuthLayout>
  )
}
