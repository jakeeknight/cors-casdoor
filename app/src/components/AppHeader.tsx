import Link from "next/link";
import Image from "next/image";

import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/Container";
import NavLinks from "@/components/NavLinks";
import { Button } from "./base/BaseButton";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-slate-700"
      href={href}
    >
      {children}
    </Popover.Button>
  );
}

export default function AppHeader() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-5">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home" className="flex items-center">
              <Image src="/vercel.svg" alt="casdoor" width={100} height={100} />
              <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                Beta
              </span>
            </Link>

            <NavLinks />
          </div>
          <div className="flex items-center gap-5">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-slate-900 p-2 hover:bg-slate-200/50 hover:stroke-slate-600 active:stroke-slate-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-slate-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-slate-50 px-6 pb-6 pt-32 shadow-2xl shadow-slate-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/auth/login" variant="outline">
                              Sign in
                            </Button>
                            <Button href="#">Download the app</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button
              href="/auth/login"
              variant="outline"
              className="hidden lg:block"
            >
              Sign in
            </Button>
            <Button
              href="/auth/register"
              className="hidden lg:block"
              color="orange"
            >
              Sign up
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
