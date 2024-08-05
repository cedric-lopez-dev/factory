import * as React from "react"
import { cn } from "@/lib/utils"

const Section = React.forwardRef(({ className, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("p-10 max-w-screen-xl m-auto", className)}
        {...props} />
))
Section.displayName = "Section"

const SectionTitle = React.forwardRef(({ className, ...props }, ref) => {

    if (!props?.children)
        return
    return <h2
        ref={ref}
        className={cn("font-semibold text-3xl", className)}
        {...props} />
}

)
SectionTitle.displayName = "SectionTitle"

export { Section, SectionTitle }