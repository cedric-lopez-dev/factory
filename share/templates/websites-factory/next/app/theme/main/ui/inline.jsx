import * as React from "react"
import { cn } from "@/lib/utils"

const Inline = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-wrap items-center", className)}
        {...props} />
))
Inline.displayName = "Inline"


export { Inline }