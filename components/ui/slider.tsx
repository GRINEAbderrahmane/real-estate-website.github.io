"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Create a ref for the track element
  const trackRef = React.useRef<HTMLSpanElement>(null)

  // Handle click on the track to update the slider value
  const handleTrackClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!trackRef.current) return

    const { left, width } = trackRef.current.getBoundingClientRect()
    const clickPosition = event.clientX - left
    const percentage = Math.min(Math.max(clickPosition / width, 0), 1)

    // Calculate the value based on the click position
    const min = props.min || 0
    const max = props.max || 100
    const value = min + percentage * (max - min)

    // If it's a range slider, update the closest thumb
    if (props.defaultValue && props.defaultValue.length > 1) {
      const values = [...((props.value as number[]) || props.defaultValue)]
      const closestThumbIndex = values.reduce((closestIndex, thumbValue, index) => {
        const currentDistance = Math.abs(thumbValue - value)
        const closestDistance = Math.abs(values[closestIndex] - value)
        return currentDistance < closestDistance ? index : closestIndex
      }, 0)

      values[closestThumbIndex] = value

      // Call onValueChange if provided
      props.onValueChange?.(values)
    } else {
      // For single thumb slider
      props.onValueChange?.([value])
    }
  }

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track
        ref={trackRef}
        className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary cursor-pointer"
        onClick={handleTrackClick}
      >
        <SliderPrimitive.Range className="absolute h-full bg-primary transition-all" />
      </SliderPrimitive.Track>
      {props.defaultValue?.map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
        />
      ))}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

