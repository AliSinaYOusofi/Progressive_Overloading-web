// components/ui/alert.jsx
import React from "react";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

/**
 * Simple Alert component with variants: default | success | destructive | info
 * Exports: Alert, AlertTitle, AlertDescription
 *
 * Place this file at: components/ui/alert.jsx
 * Then your import `import { Alert, AlertDescription } from "@/components/ui/alert";` will work.
 */

const baseClasses = "rounded-lg p-4 flex items-start gap-3 border";

const variantClasses = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    success: "bg-green-50 border-green-200 text-green-800",
    destructive: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
};

const IconForVariant = (variant) => {
    switch (variant) {
        case "success":
            return CheckCircle;
        case "destructive":
            return XCircle;
        case "info":
            return Info;
        default:
            return AlertTriangle;
    }
};

export const Alert = React.forwardRef(function Alert(
    { variant = "default", children, className = "", ...props },
    ref
) {
    const Icon = IconForVariant(variant);
    return (
        <div
            ref={ref}
            role="status"
            className={`${baseClasses} ${
                variantClasses[variant] || variantClasses.default
            } ${className}`}
            {...props}
        >
            <Icon size={20} className="mt-0.5 flex-shrink-0" />
            <div className="flex-1">{children}</div>
        </div>
    );
});

export const AlertTitle = ({ children, className = "" }) => (
    <div className={`font-semibold ${className}`}>{children}</div>
);

export const AlertDescription = ({ children, className = "" }) => (
    <div className={`text-sm opacity-90 ${className}`}>{children}</div>
);

Alert.displayName = "Alert";
