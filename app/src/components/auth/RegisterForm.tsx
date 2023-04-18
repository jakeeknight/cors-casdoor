import { api } from "@/api"
import { LockClosedIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from "react"

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (error) setError(null)
    setLoading(true)

    const data = new FormData(event.currentTarget)

    try {
      const response = await api.auth.register({
        email: data.get("email") as string,
        password: data.get("password") as string,
      })

      console.log(response)
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="text-center text-sm font-medium text-red-600">
          {error}
        </div>
      )}

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

      <div>
        <button
          type="submit"
          disabled={loading}
          className={`group relative flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600
          ${loading ? "cursor-wait" : ""}
          `}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
              aria-hidden="true"
            />
          </span>
          Sign up
        </button>
      </div>

      <div className="mt-2 text-center">
        <Link
          href="/auth/login"
          className="text-sm font-medium text-orange-600 hover:text-orange-500"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
