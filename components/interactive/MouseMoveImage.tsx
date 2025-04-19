'use client'; // Mark this as a client component

import Image from "next/image";

export default function MouseMoveImage({ imageSrc, altText }: { imageSrc: string, altText: string }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    const innerDiv = e.currentTarget.querySelector('div');
    if (innerDiv) {
      innerDiv.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const innerDiv = e.currentTarget.querySelector('div');
    if (innerDiv) {
      innerDiv.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <div
      className="relative w-full h-full max-w-md min-h-[300px] rounded-lg overflow-hidden shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 w-full h-full transition-transform duration-300">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}