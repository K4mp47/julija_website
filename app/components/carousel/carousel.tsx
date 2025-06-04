import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const images = {
  '/image1.png': 'Kingdom of the Sphere',
  '/image2.png': 'The Enchanted Forest',
  '/image3.png': 'A Journey Through Time',
  '/image4.png': 'The Secrets of the Ocean',
}

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs lg:max-w-3xl">
      <CarouselContent>
        {Object.entries(images).map(([src, alt], index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center transition duration-200 group p-0">
                  <div className="relative w-full h-full">
                    <Image src={src} alt={alt} fill className="object-cover transition duration-200 group-hover:blur-sm group-hover:opacity-20" />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 text-stone-600 text-md font-medium drop-shadow-lg">
                      {alt}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
