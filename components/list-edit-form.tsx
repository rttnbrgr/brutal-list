"use client";

import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Id, Doc } from "../convex/_generated/dataModel";
import { useEffect, useState } from "react";

// Define the form schema using Zod
const formSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(1, "Description is required"),
  url: z.string().url("Please enter a valid URL"),
});

type FormData = z.infer<typeof formSchema>;

interface ListEditFormProps {
  itemId: Id<"items">;
  initialData: Pick<Doc<"items">, "title" | "description" | "url">;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function ListEditForm({
  itemId,
  initialData,
  onSuccess,
  onError,
}: ListEditFormProps) {
  const updateItem = useMutation(api.list.updateItem);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  // Reset form when initialData changes
  useEffect(() => {
    reset(initialData);
    setSubmitError(null); // Clear any previous errors
  }, [initialData, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError(null);
      await updateItem({
        id: itemId,
        title: data.title,
        description: data.description,
        url: data.url,
      });
      onSuccess?.();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update item";
      setSubmitError(errorMessage);
      onError?.(error instanceof Error ? error : new Error(errorMessage));
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Edit Item</CardTitle>
          <CardDescription>
            Update the details for this list item.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter item title"
                {...register("title")}
                className={errors.title ? "border-red-500" : ""}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter item description"
                {...register("description")}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="Enter item URL"
                {...register("url")}
                className={errors.url ? "border-red-500" : ""}
              />
              {errors.url && (
                <p className="text-sm text-red-500">{errors.url.message}</p>
              )}
            </div>

            {submitError && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {submitError}
              </div>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Updating..." : "Update Item"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
