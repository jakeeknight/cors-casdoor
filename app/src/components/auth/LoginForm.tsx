import { api } from "@/api"
import { LockClosedIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from "react"

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const data = new FormData(event.currentTarget)

    try {
      const response = await api.auth.login({
        email: data.get("email") as string,
        password: data.get("password") as string,
      })

      console.log(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

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
            className="relative block w-full rounded-t-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full rounded-b-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-600"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-slate-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            href="/auth/reset-password"
            className="font-medium text-orange-600 hover:text-orange-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>

      <div className="mt-2 text-center">
        <Link
          href="/auth/register"
          className="text-sm font-medium text-orange-600 hover:text-orange-500"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
