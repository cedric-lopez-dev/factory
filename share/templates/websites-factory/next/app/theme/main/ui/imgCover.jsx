import * as React from "react"
import { cn } from "@/lib/utils"

const ImgCover = React.forwardRef(({ className, ...props }, ref) => (
    <img
        ref={ref}
        className={cn("object-cover w-full", className)}
        {...props} />
))
ImgCover.displayName = "ImgCover"


export { ImgCover }