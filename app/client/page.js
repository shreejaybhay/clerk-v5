"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] text-2xl">
      Hello, {user.firstName} welcome to Clerk
    </div>
  );
};

export default ClientPage;