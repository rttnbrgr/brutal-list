import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconButton, IconButtonProps } from "../components/ui/icon-button";
import { Plus } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const buttonVariants: IconButtonProps["variant"][] = [
  "fill",
  "outline",
  "ghost",
];
const buttonStates = ["default", "hover", "focus-visible", "disabled"];

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {buttonVariants.map((variant) => (
        <div className="flex flex-col gap-3" key={variant}>
          {buttonStates.map((state) => {
            const id = `button-${variant}-${state}`;
            return (
              <IconButton
                variant={variant}
                id={state}
                data-state={state}
                key={id}
                disabled={state === "disabled"}
              >
                <Plus size={16} strokeWidth={1.5} />
              </IconButton>
            );
          })}
        </div>
      ))}
    </div>
  ),
};
