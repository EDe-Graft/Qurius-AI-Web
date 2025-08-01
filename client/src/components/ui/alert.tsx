import React from "react"

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "destructive"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border p-4 ${
      variant === "destructive"
        ? "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400"
        : "border-gray-200 bg-gray-50 text-gray-800 dark:border-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    } ${className}`}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`text-sm [&_p]:leading-relaxed ${className}`} {...props} />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription } 