"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import { Id } from "../convex/_generated/dataModel";
import Item from "./item";

export default function ItemIndex() {
  const items = useQuery(api.item.listItems);
  const deleteItem = useMutation(api.item.deleteItem);

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
      <div>ItemIndex</div>

      <div className="flex flex-col gap-1">
        {items?.map((item) => (
          <Item
            key={item._id}
            item={item}
            deleteItem={deleteItem}
            toggleEdit={toggleEdit}
            editingItems={editingItems}
            handleEditSuccess={handleEditSuccess}
          />
        ))}
      </div>
    </div>
  );
}
