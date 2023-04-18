import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import type { User } from "../types/user";

interface WithAuthProps {
  Component: React.ComponentType;
  user: User | null;
}

const WithAuth: React.FC<WithAuthProps> = ({ Component, user }) => {
  const router = useRouter();
  const { user: currentUser } = useUser();

  useEffect(() => {
    if (!currentUser && !user) {
      router.push("/auth/login");
    }
  }, [currentUser, user, router]);

  if (!currentUser && !user) {
    return null;
  }

  return <Component />;
};
WithAuth.displayName = "WithAuth";

export default function withAuth(Component: React.ComponentType) {
  const AuthenticatedComponent = (props: any) => (
    <WithAuth Component={Component} user={props.user} />
  );
  AuthenticatedComponent.displayName = `WithAuth(${getDisplayName(Component)})`;

  return AuthenticatedComponent;
}

function getDisplayName(Component: React.ComponentType): string {
  return Component.displayName || Component.name || "Component";
}
