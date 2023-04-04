// import n from "../public/n.jpg";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [admin, setAdmin] = useState(true);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="n.jpg" alt="" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
              Sign in
            </h2>
          </div>
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
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className="flex ">
                <span
                  className="flex gap-5 items-center justify-center hover:bg-indigo-300 bg-indigo-500 rounded-l-lg p-2 cursor-pointer"
                  onClick={() => setAdmin(false)}
                >
                  Admin
                </span>
                <span
                  className="flex items-center justify-center hover:bg-indigo-300  bg-indigo-500 rounded-r-lg  p-2 cursor-pointer"
                  onClick={() => setAdmin(true)}
                >
                  student
                </span>
              </div>
              {admin ? (
                <div>
                  Student:-
                  <input
                    type="text"
                    className=" border-[1px] px-2 m-2 border-slate-900 "
                    placeholder="UID"
                  />
                </div>
              ) : (
                <div>
                  Admin:-
                  <input
                    type="text"
                    className=" border-[1px] px-2 m-2 border-slate-900 "
                    placeholder="ref-code"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-5 items-center justify-center  bg-indigo-500  rounded-md p-2 cursor-pointer  ">
              <Link href="./signup">Create new Account</Link>
            </div>

            <div>
              <div
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 default:none"
                href="./index"
              >
                sign in
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
