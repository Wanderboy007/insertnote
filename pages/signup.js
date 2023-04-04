// import n from "../public/n.jpg";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

export default function Example() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Uid, setUid] = useState(0);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="n.jpg" alt="" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {/* 0000000000000000000000000000000000000000000000000000000000000 */}
              <div>
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
              {/* 0000000000000000000000000000000000000000000000000000000000000 */}
              <div>
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
              {/* 0000000000000000000000000000000000000000000000000000000000000 */}

              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Student / Teacher ref-code"
                />
              </div>

              {/* 0000000000000000000000000000000000000000000000000000000000000 */}

              <div>
                <input
                  id="Branch"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Year"
                />
              </div>
              {/* 0000000000000000000000000000000000000000000000000000000000000 */}
            </div>

            <div className="flex gap-5 items-center justify-center  bg-indigo-500  rounded-md p-2 cursor-pointer  ">
              <Link href="./signup" className="">
                Create
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
