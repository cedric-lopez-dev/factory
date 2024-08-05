import * as React from "react"
import { cn } from "@/lib/utils"


const Grid = React.forwardRef(({ className, children, items, renderItem, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]", className)}
        {...props}
    >

        {items.map((item, index) => (
            renderItem(item)
        ))}
        {items.map((item, index) => (
            renderItem(item)
        ))}
        {items.map((item, index) => (
            renderItem(item)
        ))}

    </div>
))
Grid.displayName = "Grid"

export { Grid }
