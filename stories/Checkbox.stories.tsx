import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../components/ui/checkbox'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-checked" defaultChecked />
      <Label htmlFor="terms-checked">Accept terms and conditions</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-disabled" disabled />
      <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
    </div>
  ),
}

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-disabled-checked" disabled defaultChecked />
      <Label htmlFor="terms-disabled-checked">Accept terms and conditions</Label>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" defaultChecked />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </div>
  ),
}

export const TaskList: Story = {
  render: () => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Today's Tasks</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="task1" defaultChecked />
          <Label htmlFor="task1" className="line-through text-muted-foreground">
            Complete project proposal
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task2" />
          <Label htmlFor="task2">Review code changes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task3" />
          <Label htmlFor="task3">Update documentation</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task4" defaultChecked />
          <Label htmlFor="task4" className="line-through text-muted-foreground">
            Team meeting
          </Label>
        </div>
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Preferences</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="email-notifications" defaultChecked />
          <Label htmlFor="email-notifications">Email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sms-notifications" />
          <Label htmlFor="sms-notifications">SMS notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing-emails" />
          <Label htmlFor="marketing-emails">Marketing emails</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">Newsletter subscription</Label>
        </div>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Disabled unchecked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled checked</Label>
      </div>
    </div>
  ),
}
