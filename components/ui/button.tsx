import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const _box =
  "inline-flex items-center justify-center whitespace-nowrap shrink-0 ";
const _typography = "text-sm font-medium";
const _svg =
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0";
const _rest = "transition-all outline-none shrink-0 cursor-pointer";
const _focus =
  "outline-none focus-visible:border-ring focus-visible:ring-black focus-visible:ring-[1px] focus-visible:ring-offset-2 focus-visible:ring-offset-white";
const _disabled =
  "disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
const _ariaInvalid =
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

// Variants
const fill = "bg-gray-900 text-white hover:bg-gray-700 hover:bg-gray-800";
const outline =
  "bg-white border border-gray-300 text-gray-900 hover:bg-gray-200";
const ghost = "bg-transparent text-gray-900 hover:bg-gray-200";

// Mock State
const mockFillState = "data-[state=hover]:bg-gray-700";
const mockOutlineState = "data-[state=hover]:bg-gray-200";
const mockGhostState = "data-[state=hover]:bg-gray-200";
const _mockFocus =
  "data-[state=focus-visible]:border-ring data-[state=focus-visible]:ring-black data-[state=focus-visible]:ring-[1px] data-[state=focus-visible]:ring-offset-2 data-[state=focus-visible]:ring-offset-white";

const buttonVariants = cva(
  [_box, _typography, _svg, _rest, _focus, _disabled, _ariaInvalid, _mockFocus],
  {
    variants: {
      variant: {
        fill: [fill, mockFillState],
        outline: [outline, mockOutlineState],
        ghost: [ghost, mockGhostState],
      },
      size: {
        md: "h-8 rounded-md gap-2 px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

const buttonStyles = {
  // Base
  box: _box,
  typography: _typography,
  svg: _svg,
  rest: _rest,
  focus: _focus,
  disabled: _disabled,
  ariaInvalid: _ariaInvalid,

  // Variants
  fill,
  outline,
  ghost,

  // Mock State
  mockFillState,
  mockOutlineState,
  mockGhostState,
  _mockFocus,
};

export { Button, buttonVariants, buttonStyles };
