import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
    chromatic: { disableSnapshot: true },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Label>Default Label</Label>,
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="required-field">
        Required Field <span className="text-red-500">*</span>
      </Label>
      <Input
        id="required-field"
        type="text"
        placeholder="This field is required"
      />
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
        <Label htmlFor="email">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="Enter your phone number" />
      </div>
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Preferences</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="email-notifications" />
          <Label htmlFor="email-notifications">Email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sms-notifications" />
          <Label htmlFor="sms-notifications">SMS notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <Label htmlFor="marketing">Marketing emails</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Newsletter subscription</Label>
        </div>
      </div>
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email Address</Label>
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
      <div className="flex items-center space-x-2">
        <Checkbox id="remember-me" />
        <Label htmlFor="remember-me">Remember me</Label>
      </div>
    </div>
  ),
};

export const SettingsForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Enter your username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="display-name">Display Name</Label>
        <Input id="display-name" placeholder="Enter your display name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" placeholder="Tell us about yourself" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" placeholder="https://yourwebsite.com" />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Normal Label</Label>
        <Input placeholder="Normal input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled-input">Disabled Label</Label>
        <Input id="disabled-input" disabled placeholder="Disabled input" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox">Disabled Checkbox Label</Label>
      </div>
    </div>
  ),
};
