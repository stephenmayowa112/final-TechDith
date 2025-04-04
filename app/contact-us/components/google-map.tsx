"use client"

import { useRef } from "react"
import Image from "next/image"

interface GoogleMapProps {
  address: string
}

export function GoogleMap({ address }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  // Create a static map URL using OpenStreetMap
  const encodedAddress = encodeURIComponent(address)

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[400px] bg-gray-100 relative"
      aria-label={`Map showing location of ${address}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white/90 z-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Location</h3>
        <p className="text-gray-600 mb-4">{address}</p>
        <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-emerald-700 transition-colors cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
          </svg>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Background map image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Map background"
          fill
          className="object-cover opacity-50"
        />
      </div>
    </div>
  )
}

