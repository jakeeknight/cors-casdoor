import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserContext from "../context/UserContext";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const userState = useUser();
  const router = useRouter();

  const isAuthPage = router.pathname.includes("/auth");

  return (
    <UserContext.Provider value={userState}>
      {!isAuthPage && <AppHeader />}
      <Component {...pageProps} />
      {!isAuthPage && <AppFooter />}
    </UserContext.Provider>
  );
}

export default MyApp;
