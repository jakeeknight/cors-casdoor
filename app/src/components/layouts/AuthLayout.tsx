import { EAuthRouteType } from "@/types/auth";

const AuthLayout = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: EAuthRouteType;
}) => {
  return (
    <div className="flex h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-800">
            {type === EAuthRouteType.LOGIN
              ? "Sign in to your account"
              : type === EAuthRouteType.REGISTER
              ? "Sign up for an account"
              : "Reset your password"}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
