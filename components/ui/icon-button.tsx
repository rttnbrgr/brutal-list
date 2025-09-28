import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type LucideIconWithSize = React.ReactElement<LucideProps & { size?: number }>;

const _box =
  "flex justify-center items-center flex-grow-0 flex-shrink-0 relative";
const _icon = "fill:gray-400 hover:fill-gray-900 disabled:fill-gray-200";

const iconButtonVariants = cva(
  [
    _box,
    _icon,
    "bg:transparent hover:bg-gray-200 hover:cursor-pointer",
    // "transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-5 rounded",
        md: "h-6 w-6 rounded",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

// Map sizes to icon dimensions
const iconSizeMap: Record<
  NonNullable<VariantProps<typeof iconButtonVariants>["size"]>,
  number
> = {
  sm: 12,
  md: 16,
} as const;

function IconButton({
  className,
  size = "sm",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof iconButtonVariants>) {
  // / Clone children and inject size prop if it's a React element
  const iconSize = iconSizeMap[size || "sm"];

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
    <button
      data-slot="icon-button"
      className={cn(iconButtonVariants({ size, className }))}
      {...props}
    >
      {childrenWithProps}
    </button>
  );
}

export { IconButton, iconButtonVariants };
