import React from "react";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="text-lg font-bold">
            <a href="/">BrandName</a>
          </div>

          {!userId ? (
            <div className="flex gap-5">
              <div>
                <a href="/client">Client</a>
              </div>
              <div className="space-x-4">
                <a
                  href="/sign-in"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Login
                </a>
                <a
                  href="/sign-up"
                  className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Signup
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-5">
              <div>
                <a href="/client">Client</a>
              </div>
              <div>
                <a href="/profile">profile</a>
              </div>
              <UserButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
