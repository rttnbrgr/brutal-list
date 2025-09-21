"use client";

import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
// import { addItem } from "@/convex/list";

export default function ListIndex() {
  const addItem = useMutation(api.list.addItem);

  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemUrl, setNewItemUrl] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const title = e.target.title.value;
    // const description = e.target.description.value;
    // const url = e.target.url.value;
    // // addItem({ title, description, url });
    console.log(newItemTitle, newItemDescription, newItemUrl);
    addItem({
      title: newItemTitle,
      description: newItemDescription,
      url: newItemUrl,
    });
    // console.log(e.target);
    setNewItemTitle("");
    setNewItemDescription("");
    setNewItemUrl("");
  }

  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <div>ListIndex</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL"
          name="url"
          value={newItemUrl}
          onChange={(e) => setNewItemUrl(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
