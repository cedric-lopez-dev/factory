import * as React from "react"
import { cn } from "@/lib/utils"

const HeroStrong = React.forwardRef(({ className, ...props }, ref) => (


    <span
        ref={ref}
        className={cn("text-primary", className)}
        {...props}
    />

))

HeroStrong.displayName = "HeroStrong"

export { HeroStrong }