"use client";

import AppLayout from "@/components/app-layout";
import ItemIndex from "@/components/item-index";
import ItemForm from "@/components/item-form";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex h-screen">
        {/* Left side - Form */}
        <div className="flex-1 p-6 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
          <ItemForm />
        </div>

        {/* Right side - List Index */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Your Items</h2>
          <ItemIndex />
        </div>
      </div>
    </AppLayout>
  );
}
