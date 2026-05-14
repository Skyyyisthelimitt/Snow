"use client"

import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-white/10 transition-all duration-300",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between font-bold transition-all hover:text-accent group text-lg md:text-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center text-left">
        {children}
      </div>
      <div className="relative h-6 w-6 flex items-center justify-center shrink-0 ml-4">
        <div className="relative w-3 h-3 flex items-center justify-center transition-transform duration-500 group-data-[state=open]:rotate-180">
          <div className="absolute w-full h-[1.5px] bg-white/40 group-hover:bg-white/80 group-data-[state=open]:bg-accent transition-colors duration-300 rounded-full" />
          <div className="absolute h-full w-[1.5px] bg-white/40 group-hover:bg-white/80 group-data-[state=open]:bg-accent transition-all duration-300 group-data-[state=open]:scale-y-0 rounded-full" />
        </div>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("text-white/40 font-medium leading-relaxed max-w-2xl", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
