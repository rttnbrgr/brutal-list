"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
      <div className="flex items-center gap-4">
        <span>Convex + Next.js + Clerk</span>
        <Link href="/component-library">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Component Library
          </button>
        </Link>
      </div>
      <UserButton />
    </header>
  );
}
