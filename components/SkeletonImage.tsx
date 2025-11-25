"use client";
import { cn } from "@/lib/utils";

import { useState } from "react";
import Image from "next/image";

export default function SkeletonImage({
  src,
  alt,
  width,
  height,
  className,
  pclass,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  pclass?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative overflow-hidden rounded-lg", pclass)}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={`object-cover transition-opacity duration-700 ${className} ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="eager"
      />
    </div>
  );
}
