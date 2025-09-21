"use client";

import Header from "@/components/app-header";
import Main from "@/components/app-main";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
