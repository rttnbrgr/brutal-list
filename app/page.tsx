"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import StarterContent from "@/components/StarterContent";
import SignInForm from "@/components/sign-in-form";
import Header from "@/components/app-header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          Convex + Next.js + Clerk
        </h1>
        <Authenticated>
          <StarterContent />
        </Authenticated>
        <Unauthenticated>
          <SignInForm />
        </Unauthenticated>
      </main>
    </>
  );
}
