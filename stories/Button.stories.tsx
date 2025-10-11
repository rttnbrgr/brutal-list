import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, ButtonProps } from "../components/ui/button";
import { Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const buttonVariants: ButtonProps["variant"][] = ["fill", "outline", "ghost"];
const buttonStates = ["default", "hover", "focus-visible", "disabled"];

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      {/* Simple */}
      <div className="flex flex-wrap gap-4">
        {buttonVariants.map((variant) => (
          <div className="flex flex-col gap-3" key={variant}>
            {buttonStates.map((state) => {
              const id = `button-${variant}-${state}`;
              return (
                <Button
                  variant={variant}
                  id={state}
                  data-state={state}
                  key={id}
                  disabled={state === "disabled"}
                >
                  Button
                </Button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {/* With Icon */}
        {buttonVariants.map((variant) => (
          <div className="flex flex-col gap-3" key={variant}>
            {buttonStates.map((state) => {
              const id = `button-${variant}-${state}`;
              return (
                <Button
                  variant={variant}
                  id={state}
                  data-state={state}
                  key={id}
                  disabled={state === "disabled"}
                >
                  <Plus size={16} strokeWidth={1.5} />
                  Button
                </Button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Demo: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    children: "Click me",
    variant: "fill",
    // size: "md",
    // asChild: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["fill", "outline", "ghost"],
    },
    // size: {
    //   control: { type: "select" },
    //   options: ["md"],
    // },
    // asChild: {
    //   control: { type: "boolean" },
    // },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
  // render: (args) => <Button {...args} />,
  render: (args) => <Button {...args} />,
};
