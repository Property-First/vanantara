"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryItems = {
  all: [
    { src: "/banarghata1.jpg", alt: "Building Exterior", category: "Gallery" },
    { src: "/bannargh4.jpg", alt: "Altitude Lounge", category: "Gallery" },
    { src: "/bannerg2.jpg", alt: "Swimming Pool", category: "Gallery" },
    { src: "/bannerg3.jpg", alt: "Dining Area", category: "Gallery" },
    { src: "/gallery_1.jpg", alt: "Fitness Center", category: "Gallery" },
    { src: "/gallery_2.jpg", alt: "Zen Garden", category: "Gallery" },
  ],
  // gallery: [
  //   { src: "/img357.jpg", alt: "Building Exterior", category: "Gallery" },
  //   { src: "/img367.jpg", alt: "Altitude Lounge", category: "Gallery" },
  //   { src: "/images/pool-refresh.jpg", alt: "Swimming Pool", category: "Gallery" },
  //   { src: "/images/dining-savour.jpg", alt: "Dining Area", category: "Gallery" },
  // ],
  // plans: [
  //   { src: "/images/floor-plan.jpg", alt: "Floor Plan", category: "Plans" },
  // ],
  // masterPlan: [
  //   { src: "/img375.jpg", alt: "Master Plan", category: "Master Plan" },
  // ],
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-4 lg:py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className=" text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our stunning collection of images showcasing the elegance and sophistication of Godrej Aveline.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          {/* <TabsList className="flex justify-center mb-8 bg-transparent gap-2 flex-wrap">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="gallery"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              Gallery
            </TabsTrigger>
            <TabsTrigger 
              value="plans"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              Plans
            </TabsTrigger>
            <TabsTrigger 
              value="masterPlan"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              Master Plan
            </TabsTrigger>
          </TabsList> */}

          {Object.entries(galleryItems).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {items.map((item, index) => (
                  <div 
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
            {selectedImage && (
              <div className="relative aspect-video">
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
