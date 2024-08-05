import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref}
        {...props}
        className={cn("group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500", className)}
    >
        {props.children}
    </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative h-56 overflow-hidden", className)}
        {...props} >
        {props.children}
    </div>
))
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("p-6", className)}
        {...props} >
        {props.children}
    </div>
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("pt-6 flex flex-wrap", className)}
        {...props} />
))
CardFooter.displayName = "CardFooter"


const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("pb-6 text-lg hover:text-primary font-medium ease-in-out duration-500 gap-10", className)}
        {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("py-6 border-y border-slate-100 dark:border-gray-800 flex items-center flex-wrap", className)}
        {...props} >

        {props.children}
    </div>
))
CardDescription.displayName = "CardDescription"


const CardBadge = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("absolute top-4 end-4", className)}
        {...props} >

        {props.children}
    </div>
))
CardBadge.displayName = "CardBadge"

const CardInfoItem = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center me-4 gap-2", className)}
        {...props} >
        {props.children}
    </div>
));
CardInfoItem.displayName = "CardInfoItem"

const CardInfoItemText = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm", className)}
        {...props} >
        {props.children}
    </p>
));
CardInfoItemText.displayName = "InfoItemText"

const CardItem = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col grow justify-evenly", className)}
        {...props} >
        {props.children}
    </div>
));

const CardItemLabel = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-slate-400", className)}
        {...props} >
        {props.children}
    </p>
));

CardItemLabel.displayName = "CardItemLabel"

const CardItemText = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-lg font-medium", className)}
        {...props} >
        {props.children}
    </p>
));

CardItemText.displayName = "CardItemText"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardBadge, CardInfoItem, CardInfoItemText, CardItem, CardItemLabel, CardItemText }

{/* <div class="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
    <div class="relative">
        <img src="assets/images/property/1.jpg" alt="">

            <div class="absolute top-4 end-4">
                <a href="javascript:void(0)" class="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i class="mdi mdi-heart text-[20px]"></i></a>
            </div>
    </div>

    <div class="p-6">
        <div class="pb-6">
            <a href="property-detail.html" class="text-lg hover:text-green-600 font-medium ease-in-out duration-500">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</a>
        </div>

        <ul class="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
            <li class="flex items-center me-4">
                <i class="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                <span>8000sqf</span>
            </li>

            <li class="flex items-center me-4">
                <i class="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                <span>4 Beds</span>
            </li>

            <li class="flex items-center">
                <i class="uil uil-bath text-2xl me-2 text-green-600"></i>
                <span>4 Baths</span>
            </li>
        </ul>

        <ul class="pt-6 flex justify-between items-center list-none">
            <li>
                <span class="text-slate-400">Price</span>
                <p class="text-lg font-medium">$5000</p>
            </li>

            <li>
                <span class="text-slate-400">Rating</span>
                <ul class="text-lg font-medium text-amber-400 list-none">
                    <li class="inline"><i class="mdi mdi-star"></i></li>
                    <li class="inline"><i class="mdi mdi-star"></i></li>
                    <li class="inline"><i class="mdi mdi-star"></i></li>
                    <li class="inline"><i class="mdi mdi-star"></i></li>
                    <li class="inline"><i class="mdi mdi-star"></i></li>
                    <li class="inline text-black dark:text-white">5.0(30)</li>
                </ul>
            </li>
        </ul>
    </div>
</div>  */}