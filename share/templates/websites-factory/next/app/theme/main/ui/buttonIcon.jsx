import * as React from "react"
import { cn } from "@/lib/utils"

const ButtonRounded = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("p-0 h-10 w-10 inline-flex items-center text-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full", className)}
        {...props} >
        {props.children}
    </div>
))
ButtonRounded.displayName = "ButtonRounded"

export { ButtonRounded }