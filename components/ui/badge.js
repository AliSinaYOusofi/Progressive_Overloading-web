// src/components/ui/badge.jsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Simple Badge component
 *
 * Props:
 * - variant: "default" | "secondary" | "destructive" | "outline"
 * - size: "sm" | "md"
 * - className: extra classes
 * - children: content
 *
 * Example:
 *  <Badge>New</Badge>
 *  <Badge variant="destructive" size="sm">Error</Badge>
 */
const variantClasses = {
    default:
        "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100",
    secondary:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
    destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    outline:
        "bg-transparent border border-slate-200 text-slate-800 dark:border-slate-700 dark:text-slate-100",
};

const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
};

const Badge = React.forwardRef(
    (
        { className, variant = "default", size = "md", children, ...props },
        ref
    ) => {
        const v = variantClasses[variant] ?? variantClasses.default;
        const s = sizeClasses[size] ?? sizeClasses.md;

        return (
            <span
                ref={ref}
                role="status"
                className={cn(
                    "inline-flex items-center rounded-full font-medium leading-none",
                    s,
                    v,
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";

export { Badge };
