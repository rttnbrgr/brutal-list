"use client";

import { Authenticated } from "convex/react";
import StarterContent from "@/components/starter-content";

export default function Convex() {
  return (
    <Authenticated>
      <StarterContent />
    </Authenticated>
  );
}
