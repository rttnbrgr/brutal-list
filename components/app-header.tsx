"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sharedTypography =
  "font-sans text-2xl/[1] tracking-tight text-foreground";

const typography = {
  heading: `${sharedTypography} font-bold`,
  link: `${sharedTypography} text-foreground hover:underline`,
  activeLink: `underline`,
};

export default function Header() {
  const pathname = usePathname();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/component-library", label: "Component Library" },
    { href: "/convex", label: "Convex" },
  ];

  return (
    <header className="sticky top-0 z-10 bg-background p-4 flex flex-row justify-between items-center">
      <div className="flex items-center gap-4">
        <span className={typography.heading}>Brutalist</span>
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              typography.link,
              pathname === link.href && typography.activeLink,
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <UserButton />
    </header>
  );
}

// color: #000;
// font-family: Inter;
// font-size: 24px;
// font-style: normal;
// font-weight: 700;
// line-height: normal;
