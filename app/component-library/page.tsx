"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, Star, Heart, Settings, Download } from "lucide-react";

export default function ComponentLibrary() {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to App
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Component Library</h1>
        </div>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shadcn/ui Component Library</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive showcase of all available shadcn/ui components with examples and documentation.
          </p>
        </div>

        {/* Button Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Button</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Variants & Sizes</CardTitle>
                <CardDescription>
                  Different button variants and sizes available
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Button component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button";

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button size="icon">
  <Settings className="w-4 h-4" />
</Button>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Card Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Card</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>
                  A simple card with header, content, and footer
                </CardDescription>
                <CardAction>
                  <Button size="sm" variant="outline">
                    <Star className="w-4 h-4" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is the card content area. You can put any content here including text, images, forms, or other components.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Card components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  CardAction 
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
    <CardAction>
      <Button size="sm">Action</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Footer Action</Button>
  </CardFooter>
</Card>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Checkbox Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Checkbox</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Checkbox</CardTitle>
                <CardDescription>
                  Checkbox with label and state management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={checked}
                    onCheckedChange={setChecked}
                  />
                  <Label htmlFor="terms">
                    Accept terms and conditions
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">
                    Subscribe to newsletter
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled" disabled />
                  <Label htmlFor="disabled">
                    Disabled checkbox
                  </Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  State: {checked ? "Checked" : "Unchecked"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Checkbox component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Basic usage
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// With state management
const [checked, setChecked] = useState(false);

<Checkbox 
  id="terms" 
  checked={checked}
  onCheckedChange={setChecked}
/>

// Disabled state
<Checkbox id="disabled" disabled />`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Input Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Input</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Input Examples</CardTitle>
                <CardDescription>
                  Different input types and states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <Input id="search" type="search" placeholder="Search..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" disabled placeholder="Disabled input" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Current value: "{inputValue}"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Input component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Basic usage
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>

// With state management
const [value, setValue] = useState("");

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled input"
/>

// Different types
<Input type="password" placeholder="Password" />
<Input type="search" placeholder="Search..." />
<Input type="number" placeholder="Enter number" />

// Disabled state
<Input disabled placeholder="Disabled input" />`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Label Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Label</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Label Examples</CardTitle>
                <CardDescription>
                  Labels for form controls and accessibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" placeholder="Tell us about yourself" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">Upload File</Label>
                  <Input id="file" type="file" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Label component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`import { Label } from "@/components/ui/label";

// Basic usage
<Label htmlFor="input">Label text</Label>

// With form controls
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" />
</div>

// With checkboxes
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// Standalone label
<Label>This is a standalone label</Label>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Combined Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Combined Example</h2>
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>User Profile Form</CardTitle>
              <CardDescription>
                A complete form using all the components together
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell us about yourself..." />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>
                <Check className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Props Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Component Props</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>variant:</strong> "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</div>
                  <div><strong>size:</strong> "default" | "sm" | "lg" | "icon"</div>
                  <div><strong>asChild:</strong> boolean (default: false)</div>
                  <div><strong>className:</strong> string</div>
                  <div><strong>...props:</strong> All standard button HTML attributes</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>Card:</strong> Standard div props + className</div>
                  <div><strong>CardHeader:</strong> Standard div props + className</div>
                  <div><strong>CardTitle:</strong> Standard div props + className</div>
                  <div><strong>CardDescription:</strong> Standard div props + className</div>
                  <div><strong>CardContent:</strong> Standard div props + className</div>
                  <div><strong>CardFooter:</strong> Standard div props + className</div>
                  <div><strong>CardAction:</strong> Standard div props + className</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checkbox Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>checked:</strong> boolean | "indeterminate"</div>
                  <div><strong>onCheckedChange:</strong> (checked: boolean) => void</div>
                  <div><strong>disabled:</strong> boolean</div>
                  <div><strong>required:</strong> boolean</div>
                  <div><strong>className:</strong> string</div>
                  <div><strong>...props:</strong> All Radix UI Checkbox props</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>type:</strong> string (default: "text")</div>
                  <div><strong>placeholder:</strong> string</div>
                  <div><strong>value:</strong> string</div>
                  <div><strong>onChange:</strong> (e: ChangeEvent) => void</div>
                  <div><strong>disabled:</strong> boolean</div>
                  <div><strong>className:</strong> string</div>
                  <div><strong>...props:</strong> All standard input HTML attributes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
