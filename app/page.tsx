"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import StarterContent from "@/components/starter-content";
import SignInForm from "@/components/sign-in-form";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">
        Convex + Next.js + Clerk
      </h1>
      <Authenticated>
        <StarterContent />
      </Authenticated>
      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
    </>
  );
}
