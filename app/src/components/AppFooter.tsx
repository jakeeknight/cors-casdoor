import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function AppFooter() {
  return (
    <Container>
      <footer className="flex flex-col items-center border-t border-slate-200 pb-12 pt-8 md:justify-between md:pt-6">
        <Link href="/" aria-label="Home">
          <Image src="/vercel.svg" alt="casdoor" width={100} height={100} />
        </Link>
        <p className="mt-6 text-sm text-slate-500 md:mt-0">
          &copy; Copyright {new Date().getFullYear()}.
        </p>
      </footer>
    </Container>
  );
}
