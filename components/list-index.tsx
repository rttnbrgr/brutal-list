"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import ListEditForm from "./list-edit-form";
import { Id } from "../convex/_generated/dataModel";

export default function ListIndex() {
  const items = useQuery(api.list.listItems);
  const deleteItem = useMutation(api.list.deleteItem);

  // Track which items are being edited (set of item IDs)
  const [editingItems, setEditingItems] = useState<Set<Id<"items">>>(new Set());

  const toggleEdit = (itemId: Id<"items">) => {
    setEditingItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleEditSuccess = (itemId: Id<"items">) => {
    // Close the edit form after successful update
    setEditingItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
  };

  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <div>ListIndex</div>

      {items?.map((item) => (
        <div key={item._id} className="border rounded-lg p-4 space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs break-all">{item.url}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex gap-2">
            <Button onClick={() => deleteItem({ id: item._id })}>Delete</Button>
            <Button
              onClick={() => toggleEdit(item._id)}
              variant={editingItems.has(item._id) ? "secondary" : "default"}
            >
              {editingItems.has(item._id) ? "Cancel Edit" : "Edit"}
            </Button>
          </div>

          {editingItems.has(item._id) && (
            <ListEditForm
              itemId={item._id}
              initialData={item}
              onSuccess={() => handleEditSuccess(item._id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
