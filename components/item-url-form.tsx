"use client";

import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { fetchUrlMetadata } from "../lib/getUrlMetadataInternal";
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
import { ExternalLink, Calendar } from "lucide-react";

// Define the form schema using Zod - only URL is required
const formSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
});

type FormData = z.infer<typeof formSchema>;

// Sample item for demonstration - stored above function for future use
const SAMPLE_ITEM = {
  _id: "sample-id" as any,
  title: "Sample Item Title",
  description:
    "This is a sample description for the item card demonstration. It shows how the card will look with real data.",
  url: "https://example.com",
  createdAt: Date.now() - 86400000, // 1 day ago
  updatedAt: Date.now() - 3600000, // 1 hour ago
};

export default function ItemUrlForm() {
  const addItem = useMutation(api.item.addItem);

  // Start with null to show empty state, but sample item is available above
  const [sampleItem, setSampleItem] = useState<{
    _id: string;
    title: string;
    description: string;
    url: string;
    favicon?: string;
    createdAt: number;
    updatedAt: number;
  } | null>(null);

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

      {sampleItem ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
          {/* Header with title and description */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {sampleItem.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3">
              {sampleItem.description}
            </p>
          </div>

          {/* URL section */}
          <div className="mb-4">
            <a
              href={sampleItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              {sampleItem.url}
            </a>
          </div>

          {/* Favicon section */}
          {sampleItem.favicon && (
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={sampleItem.favicon}
                  alt="Site favicon"
                  className="w-4 h-4 rounded-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-xs text-gray-500">Site favicon</span>
              </div>
            </div>
          )}

          {/* Timestamps */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>
                Created: {new Date(sampleItem.createdAt).toLocaleDateString()}
              </span>
            </div>
            {sampleItem.updatedAt !== sampleItem.createdAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>
                  Updated: {new Date(sampleItem.updatedAt).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <div className="text-gray-400 mb-2">
            <ExternalLink className="w-8 h-8 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No link added yet
          </h3>
          <p className="text-sm text-gray-500">
            Add a URL above to see your first item card here.
          </p>
        </div>
      )}
    </div>
  );
}
