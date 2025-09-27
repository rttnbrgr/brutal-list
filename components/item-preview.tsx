import { ExternalLink, Calendar, Plus } from "lucide-react";
import { Doc } from "../convex/_generated/dataModel";
import Image from "next/image";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export type ItemPreviewType = Doc<"items"> & {
  favicon?: string;
};

interface ItemPreviewProps {
  item: ItemPreviewType | null;
  onItemAdded?: () => void;
}

export default function ItemPreview({ item, onItemAdded }: ItemPreviewProps) {
  const addItem = useMutation(api.item.addItem);

  const handleAddItem = async () => {
    if (!item) return;

    try {
      await addItem({
        title: item.title,
        description: item.description || "",
        url: item.url,
      });
      onItemAdded?.();
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };
  if (!item) {
    return (
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
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      {/* Header with title and description */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
      </div>

      {/* URL section */}
      <div className="mb-4">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          {item.url}
        </a>
      </div>

      {/* Favicon section */}
      {item.favicon && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <Image
              src={item.favicon}
              alt="Site favicon"
              width={16}
              height={16}
              className="rounded-sm"
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
        {item.createdAt && (
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>
              Created: {new Date(item.createdAt).toLocaleDateString()}
            </span>
          </div>
        )}
        {item.updatedAt && item.updatedAt !== item.createdAt && (
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>
              Updated: {new Date(item.updatedAt).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      {/* Add to database button */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Button onClick={handleAddItem} className="w-full" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add to List
        </Button>
      </div>
    </div>
  );
}
