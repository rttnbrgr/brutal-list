import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/ui/icon-button";
import {
  Heart,
  Star,
  Download,
  Settings,
  MoreHorizontal,
  Plus,
  Minus,
  X,
  Edit,
  Trash2,
  Copy,
  Share,
} from "lucide-react";

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

export const Default: Story = {
  args: {
    children: <Heart />,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <Heart />,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: <Heart />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Heart />,
  },
};

export const Favorite: Story = {
  args: {
    children: <Star />,
  },
};

export const DownloadStory: Story = {
  args: {
    children: <Download />,
  },
};

export const SettingsStory: Story = {
  args: {
    children: <Settings />,
  },
};

export const More: Story = {
  args: {
    children: <MoreHorizontal />,
  },
};

export const Add: Story = {
  args: {
    children: <Plus />,
  },
};

export const Remove: Story = {
  args: {
    children: <Minus />,
  },
};

export const Close: Story = {
  args: {
    children: <X />,
  },
};

export const EditStory: Story = {
  args: {
    children: <Edit />,
  },
};

export const Delete: Story = {
  args: {
    children: <Trash2 />,
  },
};

export const CopyStory: Story = {
  args: {
    children: <Copy />,
  },
};

export const ShareStory: Story = {
  args: {
    children: <Share />,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton size="sm">
        <Heart />
      </IconButton>
      <IconButton size="md">
        <Heart />
      </IconButton>
    </div>
  ),
};

export const ActionBar: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-4 border rounded-lg">
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <Copy />
      </IconButton>
      <IconButton>
        <Share />
      </IconButton>
      <IconButton>
        <Trash2 />
      </IconButton>
    </div>
  ),
};

export const MediaControls: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-4 border rounded-lg">
      <IconButton>
        <Minus />
      </IconButton>
      <IconButton size="md">
        <Heart />
      </IconButton>
      <IconButton>
        <Plus />
      </IconButton>
    </div>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 p-2 border rounded-lg">
      <IconButton size="sm">
        <Settings />
      </IconButton>
      <IconButton size="sm">
        <Download />
      </IconButton>
      <IconButton size="sm">
        <Star />
      </IconButton>
      <IconButton size="sm">
        <MoreHorizontal />
      </IconButton>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton>
        <Heart />
      </IconButton>
      <IconButton disabled>
        <Heart />
      </IconButton>
      <IconButton size="sm">
        <Heart />
      </IconButton>
      <IconButton size="md">
        <Heart />
      </IconButton>
    </div>
  ),
};
