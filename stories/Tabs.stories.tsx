import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Settings, User, Bell, Shield } from 'lucide-react'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label className="text-sm font-medium">Name</label>
              <input className="w-full px-3 py-2 border rounded-md" placeholder="Your name" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Username</label>
              <input className="w-full px-3 py-2 border rounded-md" placeholder="Your username" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label className="text-sm font-medium">Current password</label>
              <input className="w-full px-3 py-2 border rounded-md" type="password" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">New password</label>
              <input className="w-full px-3 py-2 border rounded-md" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-96">
      <TabsList>
        <TabsTrigger value="profile">
          <User className="w-4 h-4 mr-2" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="w-4 h-4 mr-2" />
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage your profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Profile content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Configure your application settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Settings content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Notifications content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="text-muted-foreground">Get a high-level view of your data</p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-muted-foreground">Detailed analytics and insights</p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Reports</h3>
          <p className="text-muted-foreground">Generate and view reports</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const FourTabs: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-96">
      <TabsList>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="security">
          <Shield className="w-4 h-4 mr-2" />
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Dashboard</h3>
          <p className="text-muted-foreground">Your main dashboard with key metrics</p>
        </div>
      </TabsContent>
      <TabsContent value="projects">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-muted-foreground">Manage your projects and tasks</p>
        </div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Team</h3>
          <p className="text-muted-foreground">Team members and collaboration</p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Security</h3>
          <p className="text-muted-foreground">Security settings and permissions</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const SimpleContent: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Content for Tab 1</h3>
          <p>This is the content for the first tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Content for Tab 2</h3>
          <p>This is the content for the second tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Content for Tab 3</h3>
          <p>This is the content for the third tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const LongTabs: Story = {
  render: () => (
    <Tabs defaultValue="long-tab-1" className="w-96">
      <TabsList>
        <TabsTrigger value="long-tab-1">Very Long Tab Name</TabsTrigger>
        <TabsTrigger value="long-tab-2">Another Long Tab</TabsTrigger>
        <TabsTrigger value="long-tab-3">Third Long Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="long-tab-1">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Very Long Tab Name</h3>
          <p className="text-muted-foreground">Content for the first long tab</p>
        </div>
      </TabsContent>
      <TabsContent value="long-tab-2">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Another Long Tab</h3>
          <p className="text-muted-foreground">Content for the second long tab</p>
        </div>
      </TabsContent>
      <TabsContent value="long-tab-3">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Third Long Tab</h3>
          <p className="text-muted-foreground">Content for the third long tab</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
