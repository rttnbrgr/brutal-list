"use client";

import { SignUpButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function SignInForm() {
  return (
    <div className="flex flex-col gap-8 w-96 mx-auto">
      <SignInButton mode="modal">
        <button className="bg-foreground text-background px-4 py-2 rounded-md">
          Sign in
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="bg-foreground text-background px-4 py-2 rounded-md">
          Sign up
        </button>
      </SignUpButton>
    </div>
  );
}
