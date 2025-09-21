"use client";

import { Authenticated } from "convex/react";
import StarterContent from "@/components/starter-content";
import AppLayout from "@/components/app-layout";

export default function Convex() {
  return (
    <AppLayout>
      <Authenticated>
        <StarterContent />
      </Authenticated>
    </AppLayout>
  );
}
