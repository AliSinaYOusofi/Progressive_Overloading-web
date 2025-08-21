// components/ui/label.jsx
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

/**
 * Simple Label wrapper around @radix-ui/react-label
 * Exports:
 *  - Label (use like: <Label htmlFor="email">Email</Label>)
 *
 * Uses Tailwind utility classes (match your project's design).
 * If you don't use Tailwind, replace className values with your CSS classes.
 */

export const Label = React.forwardRef(function Label(
    { className = "", children, ...props },
    ref
) {
    return (
        <LabelPrimitive.Root
            ref={ref}
            className={`block text-sm font-medium text-gray-700 ${className}`}
            {...props}
        >
            {children}
        </LabelPrimitive.Root>
    );
});

Label.displayName = "Label";
