"use client";

import { useState } from "react";

export function GoogleMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="h-[570px] w-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
      {isLoading && (
        <div className="h-full w-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-emerald-500"></div>
        </div>
      )}
      {hasError && (
        <div className="h-full w-full flex items-center justify-center text-red-500">
          Failed to load map
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2647742750844!2d3.2378919!3d6.4934397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1f1fbb7e75%3A0x8b114fe53f75c419!2s68%20Adebayo%20Ajayi%20Ave%2C%20Egan%2C%20Lagos!5e0!3m2!1sen!2sng!4v1624523456789!5m2!1sen!2sng"
        width="100%"
        height="200%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
