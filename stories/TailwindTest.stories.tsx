import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Test/Tailwind Integration",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TailwindClasses: Story = {
  render: () => (
    <div className="p-8 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Tailwind CSS v4 Test
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-card text-card-foreground rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Card Component</h2>
          <p className="text-muted-foreground">
            This card uses shadcn design tokens.
          </p>
        </div>
        <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Secondary Card</h2>
          <p className="text-muted-foreground">
            This demonstrates secondary styling.
          </p>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Primary Button
        </button>
        <button className="px-4 py-2 bg-destructive text-white rounded-md hover:bg-destructive/90 transition-colors">
          Destructive Button
        </button>
        <button className="px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent transition-colors">
          Outline Button
        </button>
      </div>
    </div>
  ),
};

export const DarkModeTest: Story = {
  render: () => (
    <div className="p-8 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4">Dark Mode Test</h1>
      <p className="text-muted-foreground mb-4">
        This story tests the dark mode CSS variables from your globals.css
      </p>
      <div className="p-4 bg-card text-card-foreground rounded-lg border">
        <p>Card background should use CSS variables</p>
        <p className="text-sm text-muted-foreground mt-2">
          Muted foreground text should be visible
        </p>
      </div>
    </div>
  ),
};
