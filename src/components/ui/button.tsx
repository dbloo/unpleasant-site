import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import {motion} from 'framer-motion'
import { Link } from "@tanstack/react-router"

import {useState, useRef} from 'react'



import { cn } from "#/lib/utils.ts"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        styled: "bg-white   text-white cursor-pointer",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  })  {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}


function StyledButton({
  className,
  size = "default",
  asChild = false,
  children,
  color,
  to,
  type,
  onClick,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    to?:string
  
  }) {

  const [clicked, isClicked] = useState(false)
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const handlePointerDown = () => {
    isClicked(true)
  }
  
  const handlePointerUp = () => {
    pressTimer.current = setTimeout(() => isClicked(false), 100)
  }
  
  const handlePointerLeave = () => {
    if (!clicked) return
    isClicked(false)
  }

  return (
    <div className = " relative rounded-full  h-full">
                        <motion.div
                        animate={clicked ? { y: 5, x: 0 } : { y: 0, x: 0 }}
                        transition={
                          clicked
                            ? { type: "spring", stiffness: 600, damping: 20 }
                            : { type: "spring", stiffness: 400, damping: 15 }
                        }
                       onPointerDown={handlePointerDown}
                      onPointerUp={handlePointerUp}
                      onPointerLeave={handlePointerLeave}
                      onPointerCancel={() => isClicked(false)} 
                      style={{ touchAction: "none" }} 
                        
                        >
                        <Link to ={to}><Button type = {type} onClick = {onClick} variant = "styled" className = {`${className } select-none border border-${color} text-${color} absolute`}>{children}</Button></Link>
                        </motion.div>
                        <Button variant="styled"  type = {type} className={`${className } select-none border border-${color} absolute top-2 left-0 -z-1 bg-${color}`}>{children}</Button>
                        </div>
  )
}

export {StyledButton}

export { Button, buttonVariants }
