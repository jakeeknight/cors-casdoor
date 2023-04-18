import ResetPasswordForm from "@/components/auth/ResetPasswordForm"
import AuthLayout from "@/components/layouts/AuthLayout"
import { EAuthRouteType } from "@/types/auth"

export default function Register() {
  return (
    <AuthLayout type={EAuthRouteType.RESET_PASSWORD}>
      <ResetPasswordForm />
    </AuthLayout>
  )
}
