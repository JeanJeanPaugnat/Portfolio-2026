"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const isCarousel = images.length > 3;

  if (!isCarousel) {
    return <ImageRow images={images} alt={alt} />;
  }

  return <Carousel images={images} alt={alt} />;
}

function ImageRow({ images, alt }: ImageGalleryProps) {
  return (
    <div className="flex gap-6 md:gap-9 items-center justify-center px-6 md:px-24 py-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-72 md:h-[475px] rounded-2xl overflow-hidden bg-[#d9d9d9] flex-1"
        >
          <Image
            src={image}
            alt={`${alt} - ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function Carousel({ images, alt }: ImageGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group px-6 md:px-24 py-8">
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 md:gap-9 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative shrink-0 w-72 md:w-[388px] h-72 md:h-[475px] rounded-2xl overflow-hidden bg-[#d9d9d9]"
          >
            <Image
              src={image}
              alt={`${alt} - ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-8 md:left-26 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-8 md:right-26 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      )}
    </div>
  );
}
