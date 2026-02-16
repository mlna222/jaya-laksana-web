"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "../ui/aspect-ratio";

const Documentation = () => {
  return (
    <section id="documentation" className="container py-24 sm:py-32">
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-12">
        <div className="md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold">
            Dokumentasi
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Galeri proses bongkar muat dan armada kami.
          </p>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Documentation;
