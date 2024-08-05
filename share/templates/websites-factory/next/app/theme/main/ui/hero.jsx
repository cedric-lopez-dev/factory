import * as React from "react"
import { cn } from "@/lib/utils"

const Hero = React.forwardRef(({ className, children, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("relative mt-20", className)}
        {...props}
    >
        <div className="container-fluid md:mx-4 mx-2">
            <div className=" relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden" style={{ backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center center", transition: "all 500ms ease-in 0s" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="md:text-start text-center">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
))
Hero.displayName = "Hero"

const HeroTitle = React.forwardRef(({ className, ...props }, ref) => (


    <h1
        ref={ref}
        className={cn("font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6", className)}
        {...props}
    />

))

HeroTitle.displayName = "HeroTitle"



const HeroSubTitle = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-white/70 text-xl max-w-xl", className)}
        {...props}
    />

))

HeroSubTitle.displayName = "HeroSubTitle"


export { Hero, HeroTitle, HeroSubTitle }
