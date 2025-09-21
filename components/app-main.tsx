"use client";

export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="p-8 flex flex-col gap-8">{children}</main>;
}
