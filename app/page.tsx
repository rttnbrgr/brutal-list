"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import StarterContent from "@/components/starter-content";
import SignInForm from "@/components/sign-in-form";
import AppLayout from "@/components/app-layout";

export default function Home() {
  return (
    <AppLayout>
      <h1 className="text-4xl font-bold text-center">
        Convex + Next.js + Clerk
      </h1>
      <Authenticated>
        <StarterContent />
      </Authenticated>
      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
    </AppLayout>
  );
}
