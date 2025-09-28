"use client";

import AppLayout from "@/components/app-layout";
import ItemIndex from "@/components/item-index";
import ItemForm from "@/components/item-form";
import ItemUrlForm from "@/components/item-url-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex h-screen">
        {/* Left side - Form */}
        <div className="flex-1 p-6 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
          <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="manual">Manual Entry</TabsTrigger>
              <TabsTrigger value="url">From URL</TabsTrigger>
            </TabsList>
            <TabsContent value="manual" className="mt-6">
              <ItemForm />
            </TabsContent>
            <TabsContent value="url" className="mt-6">
              <ItemUrlForm />
            </TabsContent>
          </Tabs>
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
