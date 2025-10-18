import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./button";

type LucideIconWithSize = React.ReactElement<LucideProps & { size?: number }>;

const {
  box,
  typography,
  svg,
  rest,
  focus,
  disabled,
  ariaInvalid,
  fill,
  outline,
  ghost,
  mockFillState,
  mockOutlineState,
  mockGhostState,
  _mockFocus,
} = buttonStyles;

const iconButtonVariants = cva(
  [box, typography, svg, rest, focus, disabled, ariaInvalid, _mockFocus],
  {
    variants: {
      variant: {
        fill: [fill, mockFillState],
        outline: [outline, mockOutlineState],
        ghost: [ghost, mockGhostState],
      },
      size: {
        md: "aspect-square h-8 rounded-md ",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "md",
    },
  },
);

// Map sizes to icon dimensions
const iconSizeMap: Record<
  NonNullable<VariantProps<typeof iconButtonVariants>["size"]>,
  number
> = {
  md: 16,
} as const;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Clone children and inject size prop if it's a React element
    const iconSize = iconSizeMap[size || "md"];

    const childrenWithProps = React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
        // For lucide-react icons or any component that accepts size
        return React.cloneElement(child as LucideIconWithSize, {
          size: iconSize,
          ...(child.props || {}), // Preserve existing props
        });
      }
      return child;
    });

    return (
      <Comp
        data-slot="button"
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {childrenWithProps}
      </Comp>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
