import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Settings, MoreHorizontal } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: true },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can put any content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings</CardDescription>
        <CardAction>
          <Button variant="ghost" size="md">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Configure your preferences and account settings here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Newsletter</CardTitle>
        <CardDescription>Subscribe to our newsletter</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Card className="w-80 border-b">
      <CardHeader>
        <CardTitle>Task List</CardTitle>
        <CardDescription>Your daily tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="task1" />
            <Label htmlFor="task1">Complete project proposal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="task2" />
            <Label htmlFor="task2">Review code changes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="task3" />
            <Label htmlFor="task3">Update documentation</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card className="w-64">
      <CardHeader>
        <CardTitle className="text-base">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold">567</div>
            <div className="text-sm text-muted-foreground">Posts</div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          <CardTitle>Settings</CardTitle>
        </div>
        <CardDescription>Configure your application settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Email notifications</Label>
            <Checkbox id="notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark mode</Label>
            <Checkbox id="dark-mode" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Alpha</CardTitle>
          <CardDescription>Web application project</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Status: In Progress</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View Details</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Beta</CardTitle>
          <CardDescription>Mobile app development</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Status: Completed</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View Details</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Gamma</CardTitle>
          <CardDescription>API development</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Status: Planning</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View Details</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
