import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/ui/tooltip'
import { Button } from '../components/ui/button'
import { IconButton } from '../components/ui/icon-button'
import { Heart, Settings, Download, Info, Star, HelpCircle } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <Heart />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to favorites</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const SettingsTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <Settings />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>Open settings</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const DownloadTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <Download />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>Download file</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const InfoTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <Info />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>More information</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const StarTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <Star />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>Rate this item</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const HelpTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <HelpCircle />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>Get help</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LongText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for long text</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a longer tooltip that contains more detailed information about the action or element.</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const ButtonWithTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Save Changes</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Save your changes to the database</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const DisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button disabled>Disabled Button</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This button is disabled</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const ActionBar: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-4 border rounded-lg">
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <Heart />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <Star />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Rate this item</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <Download />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <Settings />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const FormField: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Tooltip>
          <TooltipTrigger asChild>
            <IconButton size="sm">
              <HelpCircle />
            </IconButton>
          </TooltipTrigger>
          <TooltipContent>
            <p>Enter your email address</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <input 
        id="email" 
        type="email" 
        className="w-full px-3 py-2 border rounded-md" 
        placeholder="Enter your email"
      />
    </div>
  ),
}

export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Button 1</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>First button tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Button 2</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Second button tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Button 3</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Third button tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}
