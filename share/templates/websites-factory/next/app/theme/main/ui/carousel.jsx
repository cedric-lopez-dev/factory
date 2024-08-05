import * as React from "react"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



const CarouselComponent = React.forwardRef(({ className, children, items, renderItem, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("w-full flex items-center justify-center py-10 px-10", className)}
        {...props}
    >
        <Carousel className="w-full" opts={{
            align: "start",
        }}>
            <CarouselContent className="-ml-1">
                {items.map((item, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 p-5">
                        {renderItem(item)}
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
))
CarouselComponent.displayName = "CarouselComponent"
export { CarouselComponent }