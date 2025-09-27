"use client";

import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { fetchUrlMetadata } from "../lib/fetchUrlMetadata";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ItemPreview, { type ItemPreviewType } from "./item-preview";
import { Id } from "@/convex/_generated/dataModel";

// Define the form schema using Zod - only URL is required
const formSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
});

type FormData = z.infer<typeof formSchema>;

export default function ItemUrlForm() {
  const addItem = useMutation(api.item.addItem);

  // Start with null to show empty state, but sample item is available above
  const [sampleItem, setSampleItem] = useState<ItemPreviewType | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Get metadata from the URL using the simple async function
      const metadata = await fetchUrlMetadata(data.url);

      // Store the results in our local sample item state
      setSampleItem({
        _id: "preview-" + Date.now(),
        title: metadata.title || "No Title",
        description: metadata.description || "No Description",
        url: data.url,
        favicon: metadata.favicon,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      reset(); // Clear the form after successful submission
    } catch (error) {
      console.error("Failed to get URL metadata:", error);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto pt-8">
      <Card>
        <CardHeader>
          <CardTitle>Add URL</CardTitle>
          <CardDescription>
            Quickly add a URL to your list. Title and description will be set to
            the URL.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="Enter URL"
                {...register("url")}
                className={errors.url ? "border-red-500" : ""}
              />
              {errors.url && (
                <p className="text-sm text-red-500">{errors.url.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Adding..." : "Add URL"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <ItemPreview item={sampleItem} onItemAdded={() => setSampleItem(null)} />
    </div>
  );
}
