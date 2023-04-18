import { LockOpenIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const ResetPasswordForm = () => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full rounded-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            placeholder="Email address"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockOpenIcon
              className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
              aria-hidden="true"
            />
          </span>
          Reset password
        </button>
      </div>

      <div className="mt-2 text-center">
        <Link
          href="/auth/login"
          className="text-sm font-medium text-orange-600 hover:text-orange-500"
        >
          I remember my password
        </Link>
      </div>
    </form>
  )
}

export default ResetPasswordForm
