import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: true },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Password: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  ),
};

export const Number: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="age">Age</Label>
      <Input id="age" type="number" placeholder="Enter your age" />
    </div>
  ),
};

export const Search: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="search">Search</Label>
      <Input id="search" type="search" placeholder="Search..." />
    </div>
  ),
};

export const URL: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="website">Website</Label>
      <Input id="website" type="url" placeholder="https://example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled">Disabled Input</Label>
      <Input id="disabled" disabled placeholder="This input is disabled" />
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="prefilled">Prefilled Input</Label>
      <Input id="prefilled" defaultValue="john@example.com" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" placeholder="Enter your first name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" placeholder="Enter your last name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="Enter your phone number" />
      </div>
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <Input id="login-email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <Input
          id="login-password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  ),
};

export const SearchForm: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="search-input">Search</Label>
      <Input
        id="search-input"
        type="search"
        placeholder="Search for products..."
      />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="text">Text</Label>
        <Input id="text" type="text" placeholder="Text input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-type">Email</Label>
        <Input id="email-type" type="email" placeholder="Email input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-type">Password</Label>
        <Input
          id="password-type"
          type="password"
          placeholder="Password input"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-type">Number</Label>
        <Input id="number-type" type="number" placeholder="Number input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel-type">Telephone</Label>
        <Input id="tel-type" type="tel" placeholder="Phone input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="url-type">URL</Label>
        <Input id="url-type" type="url" placeholder="URL input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="search-type">Search</Label>
        <Input id="search-type" type="search" placeholder="Search input" />
      </div>
    </div>
  ),
};
