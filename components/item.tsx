"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import ItemEditForm from "./item-edit-form";
import { Doc, Id } from "../convex/_generated/dataModel";
import { IconButton } from "./ui/icon-button";
import { Edit, Link, ListPlus, Tag, Trash } from "lucide-react";

interface ItemProps {
  item: Doc<"items">;
  deleteItem: (args: { id: Id<"items"> }) => void;
  toggleEdit: (itemId: Id<"items">) => void;
  editingItems: Set<Id<"items">>;
  handleEditSuccess: (itemId: Id<"items">) => void;
}

export default function Item({
  item,
  deleteItem,
  toggleEdit,
  editingItems,
  handleEditSuccess,
}: ItemProps) {
  function handleList() {
    console.log("list");
  }

  function handleTag() {
    console.log("tag");
  }

  return (
    <div className="p-1 space-y-4">
      <div className="flex flex-row items-center gap-0.5">
        <Tooltip delayDuration={6000}>
          <TooltipTrigger asChild>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 p-0.5 pr-1 rounded flex-grow bg:transparent hover:bg-gray-200 hover:cursor-pointer"
            >
              <div className="size-4 rounded-sm bg-teal-500" />
              <p className="text-md font-regular leading-none flex-grow text-left">
                {item.title}
              </p>
              <Link size={12} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs break-all font-sans whitespace-nowrap text-ellipsis overflow-hidden">
              <span className="font-mono">{item.url}</span>
              &nbsp;↗
            </p>
          </TooltipContent>
        </Tooltip>
        <IconButton onClick={() => toggleEdit(item._id)} size="sm">
          <Edit />
        </IconButton>
        <IconButton onClick={() => handleList()} size="sm">
          <ListPlus />
        </IconButton>
        <IconButton onClick={() => handleTag()} size="sm">
          <Tag />
        </IconButton>
        <IconButton
          onClick={() => deleteItem({ id: item._id })}
          size="sm"
          className="hidden"
        >
          <Trash />
        </IconButton>
      </div>

      {editingItems.has(item._id) && (
        <ItemEditForm
          itemId={item._id}
          initialData={item}
          onSuccess={() => handleEditSuccess(item._id)}
        />
      )}
    </div>
  );
}
